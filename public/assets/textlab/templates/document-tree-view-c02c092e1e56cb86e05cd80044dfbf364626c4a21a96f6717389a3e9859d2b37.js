(function() { this.JST || (this.JST = {}); this.JST["textlab/templates/document-tree-view"] = function(obj){var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('');  if( owner ) { ; __p.push(' \n  <div id="document-toolbar">\n    <button class=\'btn btn-default btn-sm add-leaf-button\'><i class="fa fa-file-o fa-lg"></i> Add Leaf</button>\n    <button class=\'btn btn-default btn-sm add-section-button\'><i class="fa fa-folder fa-lg"></i> Add Section</button>\n    <button class="btn btn-default btn-sm edit-settings-button"><i class="fa fa-cog fa-lg"></i> Edit Settings</button>\n  </div>\n');  } ; __p.push('\n<div id="tree-container">\n  <div id="document-tree"></div>\n</div>\n');}return __p.join('');};
}).call(this);
