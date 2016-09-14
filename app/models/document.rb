class Document < ActiveRecord::Base
      	
  has_many :leafs, dependent: :destroy
  has_many :document_sections, dependent: :destroy
  has_many :document_nodes, dependent: :destroy
        
  def self.get_all()
		documents = Document.all
		documents.map { |document| document.list_obj }
	end  
  
  after_create do |document|
    root_section = DocumentSection.new
    root_section.document = self
    root_section.name = self.name
    root_section.save

    root_node = DocumentNode.new
    root_node.document = self
    root_node.position = 0
    root_node.document_section = root_section
    root_node.save
  end
  
  def root_node
    self.document_nodes.where({ document_node_id: nil, document_id: self.id }).first
  end
      
  def list_obj
    { 
      id: self.id,
      name: self.name,
      description: self.description
    }
  end
  
  def obj
    leafsJSON = self.leafs.map { |leaf| leaf.obj }
    sectionsJSON = self.document_sections.map { |section| section.obj }
    nodesJSON = self.document_nodes.map { |node| node.obj }
    
    { 
      id: self.id,
      name: self.name,
      description: self.description,
      leafs: leafsJSON,
      sections: sectionsJSON,
      document_nodes: nodesJSON
    }
  end
  
  def import_document!( manuscript_guid )

    # note: this fn assumes document is empty to start
    root_node = self.root_node
    position = 0
    
    # create all folders and their contents
    Folder.where({ manuscript_id: manuscript_guid }).order(:name).each { |folder|
      section = DocumentSection.new
      section.document = self
      section.name = folder.name
      section.save!

      node = DocumentNode.new
      node.document = self
      node.position = position
      node.document_node_id = root_node.id
      node.document_section = section
      node.save!
      position = position + 1

      leaf_position = 0
      folder.transcriptions.order(:name).each { |transcription|
        transcription.import_leaf!( node, self, leaf_position )
        leaf_position = leaf_position + 1
      }
    }

    # import the transcriptions that aren't in folders
    Transcription.where({ folder_id: nil, manuscriptid: manuscript_guid }).order(:name).each { |transcription|
      transcription.import_leaf!( root_node, self, position )
      position = position + 1
    }
    
  end
  
end