(function() { this.JST || (this.JST = {}); this.JST["textlab/templates/common/number-input"] = function(obj){var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('<div class="row ',  (error) ? 'has-error' : '' ,'">\n  <label for="',  field_name ,'" class="control-label col-sm-2">',  field_title ,':</label>\n  <div class="col-sm-9 field-wrapper">\n\t  <input type="number" class="form-control year-input" id="',  field_name ,'" value="',  field_value ,'" >\n\t  <div class="instructions">',  field_instructions ,'</div>\n  </div>\n</div>\n');}return __p.join('');};
}).call(this);