$(document).ready(() => {
	var blocks = $(".codeblock, .codeinline");
	for (var i = 0; i < blocks.length; i++) {
		HighlightCode(blocks[i]);
	}
});

function HighlightCode(block){
	var html = $(block).html();

	var keywords = ["VAR", "PARAM", "IF", "ELSE", "ELSEIF", "WHILE", "MORETHAN"
					, "LESSTHAN", "EQUALTO", "DO", "FUNCTION", "WHILE", "WHERE"];
	keywords.forEach((keyword) => {
			html = html.replace(new RegExp(keyword,"g"), "<span class='code_keyword'>" + keyword + "</span>");
	});

	html = html.replace(/(\d+)/g, "<span class='code_number'>" + "$1" + "</span>");

	$(block).html(html);
}
