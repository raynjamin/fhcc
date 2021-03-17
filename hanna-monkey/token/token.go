package token

type TokenType string

type Token struct {
	Type 		TokenType
	Literal string
}

const (
	// for a token/character we don't know about
	ILLEGAL 	= "ILLEGAL"
	// end of file, so the parser knows when to stop
	EOF     	= "EOF"

	// Identifiers + literals
	IDENT 		= "IDENT"
	INT   		= "INT"

	// Operators
	ASSIGN   	= "="
	PLUS     	= "+"
	MINUS    	= "-"
	BANG     	= "!"
	ASTERISK 	= "*"
	SLASH    	= "/"
	LT    		= "<"
	GT    		= ">"
	EQ				= "=="
	NOT_EQ		= "!="

	// Delimiters
	COMMA     = ","
	SEMICOLON = ";"

	LPAREN 		= "("
	RPAREN 		= ")"
	LBRACE 		= "{"
	RBRACE 		= "}"

	// Keywords
	FUNCTION 	= "FUNCTION"
	LET      	= "LET"
	TRUE		 	= "TRUE"
	FALSE			= "FALSE"
	IF				= "IF"
	ELSE			= "ELSE"
	RETURN		= "RETURN"
)

var keywords = map[string]TokenType{
	"fn": 		FUNCTION,
	"let": 		LET,
	"true":		TRUE,
	"false":	FALSE,
	"if":			IF,
	"else":		ELSE,
	"return":	RETURN,
}

// Allows us to lex identifiers and *keywords*.
func LookupIdent(ident string) TokenType {
	// WITS::
	if tok, ok := keywords[ident]; ok {
		return tok
	}
	return IDENT
}