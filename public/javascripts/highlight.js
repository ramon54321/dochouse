$(document).ready(() => {
	var blocks = $(".codeblock, .codeinline");
	for (var i = 0; i < blocks.length; i++) {
		HighlightCode(blocks[i]);
	}
});

function HighlightCode(block){
	var html = $(block).html();

	console.log(html);

	html = html.replace(/(\s\"[a-zA-Z0-9]*[a-zA-Z0-9 \.\!\?]*\")/g, "<span class='code_string'>" + "$1" + "</span>");

	var keywords = ["VAR", "TYPE", "DELETE", "PARAM", "NOT", "UNLESS", "IF", "ELSE", "ELSEIF", "WHILE", "MORETHAN"
					, "LESSTHAN", "MORETHAN_OR_EQUALTO", "LESSTHAN_OR_EQUALTO", "EQUALTO", "OR", "AND", "DO", "FUNCTION", "RETURN", "WHILE", "WHERE", "TRUE", "FALSE", "FOR", "FOREACH", "IN", "REPEAT", "TIMES"];
	keywords.forEach((keyword) => {
			html = html.replace(new RegExp("\\b" + keyword + "\\b","g"), "<span class='code_keyword'>" + keyword + "</span>");
	});

	html = html.replace(/\b(\d+)\b/g, "<span class='code_number'>" + "$1" + "</span>");

	html = html.replace(/\b([\d|A|B|C|D|E|F]+)\b/g, "<span class='code_number'>" + "$1" + "</span>");

	html = html.replace(/\b([A-Z])\b/g, "<span class='code_number'>" + "$1" + "</span>");

	$(block).html(html);
}
