(function() { this.JST || (this.JST = {}); this.JST["tl-viewer/templates/sequence-list-panel"] = function(obj){var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('<div id=\'sequence-list\'>\n\t<h4>Sequences for Leaf</h4>\n\t<ul>\n\t\t');  _.each( sequences, function( sequence ) { ; __p.push('\n\t\t\t<li><a href=\'#\' class=\'sequence-link\' data-sequence-id=\'',  sequence.id ,'\'>',  sequence.name ,'</a> by ',  sequence.owner_name ,'.</li>\n\t\t');  }); ; __p.push('\n\t</ul>\n</div>\n<div id=\'sequence-panel\'></div>\n');}return __p.join('');};
}).call(this);