"use strict";

System.register([], function (_export, _context) {
    "use strict";

    var parser;
    return {
        setters: [],
        execute: function () {
            parser = function () {
                var parser = { trace: function trace() {},
                    yy: {},
                    symbols_: { "error": 2, "JSON_PATH": 3, "DOLLAR": 4, "PATH_COMPONENTS": 5, "LEADING_CHILD_MEMBER_EXPRESSION": 6, "PATH_COMPONENT": 7, "MEMBER_COMPONENT": 8, "SUBSCRIPT_COMPONENT": 9, "CHILD_MEMBER_COMPONENT": 10, "DESCENDANT_MEMBER_COMPONENT": 11, "DOT": 12, "MEMBER_EXPRESSION": 13, "DOT_DOT": 14, "STAR": 15, "IDENTIFIER": 16, "SCRIPT_EXPRESSION": 17, "INTEGER": 18, "END": 19, "CHILD_SUBSCRIPT_COMPONENT": 20, "DESCENDANT_SUBSCRIPT_COMPONENT": 21, "[": 22, "SUBSCRIPT": 23, "]": 24, "SUBSCRIPT_EXPRESSION": 25, "SUBSCRIPT_EXPRESSION_LIST": 26, "SUBSCRIPT_EXPRESSION_LISTABLE": 27, ",": 28, "STRING_LITERAL": 29, "ARRAY_SLICE": 30, "FILTER_EXPRESSION": 31, "QQ_STRING": 32, "Q_STRING": 33, "$accept": 0, "$end": 1 },
                    terminals_: { 2: "error", 4: "DOLLAR", 12: "DOT", 14: "DOT_DOT", 15: "STAR", 16: "IDENTIFIER", 17: "SCRIPT_EXPRESSION", 18: "INTEGER", 19: "END", 22: "[", 24: "]", 28: ",", 30: "ARRAY_SLICE", 31: "FILTER_EXPRESSION", 32: "QQ_STRING", 33: "Q_STRING" },
                    productions_: [0, [3, 1], [3, 2], [3, 1], [3, 2], [5, 1], [5, 2], [7, 1], [7, 1], [8, 1], [8, 1], [10, 2], [6, 1], [11, 2], [13, 1], [13, 1], [13, 1], [13, 1], [13, 1], [9, 1], [9, 1], [20, 3], [21, 4], [23, 1], [23, 1], [26, 1], [26, 3], [27, 1], [27, 1], [27, 1], [25, 1], [25, 1], [25, 1], [29, 1], [29, 1]],
                    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */
                    /**/) {
                        /* this == yyval */
                        if (!yy.ast) {
                            yy.ast = _ast;
                            _ast.initialize();
                        }

                        var $0 = $$.length - 1;
                        switch (yystate) {
                            case 1:
                                yy.ast.set({ expression: { type: "root", value: $$[$0] } });yy.ast.unshift();return yy.ast.yield();
                                break;
                            case 2:
                                yy.ast.set({ expression: { type: "root", value: $$[$0 - 1] } });yy.ast.unshift();return yy.ast.yield();
                                break;
                            case 3:
                                yy.ast.unshift();return yy.ast.yield();
                                break;
                            case 4:
                                yy.ast.set({ operation: "member", scope: "child", expression: { type: "identifier", value: $$[$0 - 1] } });yy.ast.unshift();return yy.ast.yield();
                                break;
                            case 5:
                                break;
                            case 6:
                                break;
                            case 7:
                                yy.ast.set({ operation: "member" });yy.ast.push();
                                break;
                            case 8:
                                yy.ast.set({ operation: "subscript" });yy.ast.push();
                                break;
                            case 9:
                                yy.ast.set({ scope: "child" });
                                break;
                            case 10:
                                yy.ast.set({ scope: "descendant" });
                                break;
                            case 11:
                                break;
                            case 12:
                                yy.ast.set({ scope: "child", operation: "member" });
                                break;
                            case 13:
                                break;
                            case 14:
                                yy.ast.set({ expression: { type: "wildcard", value: $$[$0] } });
                                break;
                            case 15:
                                yy.ast.set({ expression: { type: "identifier", value: $$[$0] } });
                                break;
                            case 16:
                                yy.ast.set({ expression: { type: "script_expression", value: $$[$0] } });
                                break;
                            case 17:
                                yy.ast.set({ expression: { type: "numeric_literal", value: parseInt($$[$0]) } });
                                break;
                            case 18:
                                break;
                            case 19:
                                yy.ast.set({ scope: "child" });
                                break;
                            case 20:
                                yy.ast.set({ scope: "descendant" });
                                break;
                            case 21:
                                break;
                            case 22:
                                break;
                            case 23:
                                break;
                            case 24:
                                $$[$0].length > 1 ? yy.ast.set({ expression: { type: "union", value: $$[$0] } }) : this.$ = $$[$0];
                                break;
                            case 25:
                                this.$ = [$$[$0]];
                                break;
                            case 26:
                                this.$ = $$[$0 - 2].concat($$[$0]);
                                break;
                            case 27:
                                this.$ = { expression: { type: "numeric_literal", value: parseInt($$[$0]) } };yy.ast.set(this.$);
                                break;
                            case 28:
                                this.$ = { expression: { type: "string_literal", value: $$[$0] } };yy.ast.set(this.$);
                                break;
                            case 29:
                                this.$ = { expression: { type: "slice", value: $$[$0] } };yy.ast.set(this.$);
                                break;
                            case 30:
                                this.$ = { expression: { type: "wildcard", value: $$[$0] } };yy.ast.set(this.$);
                                break;
                            case 31:
                                this.$ = { expression: { type: "script_expression", value: $$[$0] } };yy.ast.set(this.$);
                                break;
                            case 32:
                                this.$ = { expression: { type: "filter_expression", value: $$[$0] } };yy.ast.set(this.$);
                                break;
                            case 33:
                                this.$ = $$[$0];
                                break;
                            case 34:
                                this.$ = $$[$0];
                                break;
                        }
                    },
                    table: [{ 3: 1, 4: [1, 2], 6: 3, 13: 4, 15: [1, 5], 16: [1, 6], 17: [1, 7], 18: [1, 8], 19: [1, 9] }, { 1: [3] }, { 1: [2, 1], 5: 10, 7: 11, 8: 12, 9: 13, 10: 14, 11: 15, 12: [1, 18], 14: [1, 19], 20: 16, 21: 17, 22: [1, 20] }, { 1: [2, 3], 5: 21, 7: 11, 8: 12, 9: 13, 10: 14, 11: 15, 12: [1, 18], 14: [1, 19], 20: 16, 21: 17, 22: [1, 20] }, { 1: [2, 12], 12: [2, 12], 14: [2, 12], 22: [2, 12] }, { 1: [2, 14], 12: [2, 14], 14: [2, 14], 22: [2, 14] }, { 1: [2, 15], 12: [2, 15], 14: [2, 15], 22: [2, 15] }, { 1: [2, 16], 12: [2, 16], 14: [2, 16], 22: [2, 16] }, { 1: [2, 17], 12: [2, 17], 14: [2, 17], 22: [2, 17] }, { 1: [2, 18], 12: [2, 18], 14: [2, 18], 22: [2, 18] }, { 1: [2, 2], 7: 22, 8: 12, 9: 13, 10: 14, 11: 15, 12: [1, 18], 14: [1, 19], 20: 16, 21: 17, 22: [1, 20] }, { 1: [2, 5], 12: [2, 5], 14: [2, 5], 22: [2, 5] }, { 1: [2, 7], 12: [2, 7], 14: [2, 7], 22: [2, 7] }, { 1: [2, 8], 12: [2, 8], 14: [2, 8], 22: [2, 8] }, { 1: [2, 9], 12: [2, 9], 14: [2, 9], 22: [2, 9] }, { 1: [2, 10], 12: [2, 10], 14: [2, 10], 22: [2, 10] }, { 1: [2, 19], 12: [2, 19], 14: [2, 19], 22: [2, 19] }, { 1: [2, 20], 12: [2, 20], 14: [2, 20], 22: [2, 20] }, { 13: 23, 15: [1, 5], 16: [1, 6], 17: [1, 7], 18: [1, 8], 19: [1, 9] }, { 13: 24, 15: [1, 5], 16: [1, 6], 17: [1, 7], 18: [1, 8], 19: [1, 9], 22: [1, 25] }, { 15: [1, 29], 17: [1, 30], 18: [1, 33], 23: 26, 25: 27, 26: 28, 27: 32, 29: 34, 30: [1, 35], 31: [1, 31], 32: [1, 36], 33: [1, 37] }, { 1: [2, 4], 7: 22, 8: 12, 9: 13, 10: 14, 11: 15, 12: [1, 18], 14: [1, 19], 20: 16, 21: 17, 22: [1, 20] }, { 1: [2, 6], 12: [2, 6], 14: [2, 6], 22: [2, 6] }, { 1: [2, 11], 12: [2, 11], 14: [2, 11], 22: [2, 11] }, { 1: [2, 13], 12: [2, 13], 14: [2, 13], 22: [2, 13] }, { 15: [1, 29], 17: [1, 30], 18: [1, 33], 23: 38, 25: 27, 26: 28, 27: 32, 29: 34, 30: [1, 35], 31: [1, 31], 32: [1, 36], 33: [1, 37] }, { 24: [1, 39] }, { 24: [2, 23] }, { 24: [2, 24], 28: [1, 40] }, { 24: [2, 30] }, { 24: [2, 31] }, { 24: [2, 32] }, { 24: [2, 25], 28: [2, 25] }, { 24: [2, 27], 28: [2, 27] }, { 24: [2, 28], 28: [2, 28] }, { 24: [2, 29], 28: [2, 29] }, { 24: [2, 33], 28: [2, 33] }, { 24: [2, 34], 28: [2, 34] }, { 24: [1, 41] }, { 1: [2, 21], 12: [2, 21], 14: [2, 21], 22: [2, 21] }, { 18: [1, 33], 27: 42, 29: 34, 30: [1, 35], 32: [1, 36], 33: [1, 37] }, { 1: [2, 22], 12: [2, 22], 14: [2, 22], 22: [2, 22] }, { 24: [2, 26], 28: [2, 26] }],
                    defaultActions: { 27: [2, 23], 29: [2, 30], 30: [2, 31], 31: [2, 32] },
                    parseError: function parseError(str, hash) {
                        if (hash.recoverable) {
                            this.trace(str);
                        } else {
                            throw new Error(str);
                        }
                    },
                    parse: function parse(input) {
                        var self = this,
                            stack = [0],
                            vstack = [null],
                            lstack = [],
                            table = this.table,
                            yytext = '',
                            yylineno = 0,
                            yyleng = 0,
                            recovering = 0,
                            TERROR = 2,
                            EOF = 1;
                        var args = lstack.slice.call(arguments, 1);
                        this.lexer.setInput(input);
                        this.lexer.yy = this.yy;
                        this.yy.lexer = this.lexer;
                        this.yy.parser = this;
                        if (typeof this.lexer.yylloc == 'undefined') {
                            this.lexer.yylloc = {};
                        }
                        var yyloc = this.lexer.yylloc;
                        lstack.push(yyloc);
                        var ranges = this.lexer.options && this.lexer.options.ranges;
                        if (typeof this.yy.parseError === 'function') {
                            this.parseError = this.yy.parseError;
                        } else {
                            this.parseError = Object.getPrototypeOf(this).parseError;
                        }
                        function popStack(n) {
                            stack.length = stack.length - 2 * n;
                            vstack.length = vstack.length - n;
                            lstack.length = lstack.length - n;
                        }
                        function lex() {
                            var token;
                            token = self.lexer.lex() || EOF;
                            if (typeof token !== 'number') {
                                token = self.symbols_[token] || token;
                            }
                            return token;
                        }
                        var symbol,
                            preErrorSymbol,
                            state,
                            action,
                            a,
                            r,
                            yyval = {},
                            p,
                            len,
                            newState,
                            expected;
                        while (true) {
                            state = stack[stack.length - 1];
                            if (this.defaultActions[state]) {
                                action = this.defaultActions[state];
                            } else {
                                if (symbol === null || typeof symbol == 'undefined') {
                                    symbol = lex();
                                }
                                action = table[state] && table[state][symbol];
                            }
                            if (typeof action === 'undefined' || !action.length || !action[0]) {
                                var errStr = '';
                                expected = [];
                                for (p in table[state]) {
                                    if (this.terminals_[p] && p > TERROR) {
                                        expected.push('\'' + this.terminals_[p] + '\'');
                                    }
                                }
                                if (this.lexer.showPosition) {
                                    errStr = 'Parse error on line ' + (yylineno + 1) + ':\n' + this.lexer.showPosition() + '\nExpecting ' + expected.join(', ') + ', got \'' + (this.terminals_[symbol] || symbol) + '\'';
                                } else {
                                    errStr = 'Parse error on line ' + (yylineno + 1) + ': Unexpected ' + (symbol == EOF ? 'end of input' : '\'' + (this.terminals_[symbol] || symbol) + '\'');
                                }
                                this.parseError(errStr, {
                                    text: this.lexer.match,
                                    token: this.terminals_[symbol] || symbol,
                                    line: this.lexer.yylineno,
                                    loc: yyloc,
                                    expected: expected
                                });
                            }
                            if (action[0] instanceof Array && action.length > 1) {
                                throw new Error('Parse Error: multiple actions possible at state: ' + state + ', token: ' + symbol);
                            }
                            switch (action[0]) {
                                case 1:
                                    stack.push(symbol);
                                    vstack.push(this.lexer.yytext);
                                    lstack.push(this.lexer.yylloc);
                                    stack.push(action[1]);
                                    symbol = null;
                                    if (!preErrorSymbol) {
                                        yyleng = this.lexer.yyleng;
                                        yytext = this.lexer.yytext;
                                        yylineno = this.lexer.yylineno;
                                        yyloc = this.lexer.yylloc;
                                        if (recovering > 0) {
                                            recovering--;
                                        }
                                    } else {
                                        symbol = preErrorSymbol;
                                        preErrorSymbol = null;
                                    }
                                    break;
                                case 2:
                                    len = this.productions_[action[1]][1];
                                    yyval.$ = vstack[vstack.length - len];
                                    yyval._$ = {
                                        first_line: lstack[lstack.length - (len || 1)].first_line,
                                        last_line: lstack[lstack.length - 1].last_line,
                                        first_column: lstack[lstack.length - (len || 1)].first_column,
                                        last_column: lstack[lstack.length - 1].last_column
                                    };
                                    if (ranges) {
                                        yyval._$.range = [lstack[lstack.length - (len || 1)].range[0], lstack[lstack.length - 1].range[1]];
                                    }
                                    r = this.performAction.apply(yyval, [yytext, yyleng, yylineno, this.yy, action[1], vstack, lstack].concat(args));
                                    if (typeof r !== 'undefined') {
                                        return r;
                                    }
                                    if (len) {
                                        stack = stack.slice(0, -1 * len * 2);
                                        vstack = vstack.slice(0, -1 * len);
                                        lstack = lstack.slice(0, -1 * len);
                                    }
                                    stack.push(this.productions_[action[1]][0]);
                                    vstack.push(yyval.$);
                                    lstack.push(yyval._$);
                                    newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
                                    stack.push(newState);
                                    break;
                                case 3:
                                    return true;
                            }
                        }
                        return true;
                    } };
                var _ast = {

                    initialize: function initialize() {
                        this._nodes = [];
                        this._node = {};
                        this._stash = [];
                    },

                    set: function set(props) {
                        for (var k in props) {
                            this._node[k] = props[k];
                        }return this._node;
                    },

                    node: function node(obj) {
                        if (arguments.length) this._node = obj;
                        return this._node;
                    },

                    push: function push() {
                        this._nodes.push(this._node);
                        this._node = {};
                    },

                    unshift: function unshift() {
                        this._nodes.unshift(this._node);
                        this._node = {};
                    },

                    yield: function _yield() {
                        var _nodes = this._nodes;
                        this.initialize();
                        return _nodes;
                    }
                };
                /* generated by jison-lex 0.2.1 */
                var lexer = function () {
                    var lexer = {

                        EOF: 1,

                        parseError: function parseError(str, hash) {
                            if (this.yy.parser) {
                                this.yy.parser.parseError(str, hash);
                            } else {
                                throw new Error(str);
                            }
                        },

                        // resets the lexer, sets new input
                        setInput: function setInput(input) {
                            this._input = input;
                            this._more = this._backtrack = this.done = false;
                            this.yylineno = this.yyleng = 0;
                            this.yytext = this.matched = this.match = '';
                            this.conditionStack = ['INITIAL'];
                            this.yylloc = {
                                first_line: 1,
                                first_column: 0,
                                last_line: 1,
                                last_column: 0
                            };
                            if (this.options.ranges) {
                                this.yylloc.range = [0, 0];
                            }
                            this.offset = 0;
                            return this;
                        },

                        // consumes and returns one char from the input
                        input: function input() {
                            var ch = this._input[0];
                            this.yytext += ch;
                            this.yyleng++;
                            this.offset++;
                            this.match += ch;
                            this.matched += ch;
                            var lines = ch.match(/(?:\r\n?|\n).*/g);
                            if (lines) {
                                this.yylineno++;
                                this.yylloc.last_line++;
                            } else {
                                this.yylloc.last_column++;
                            }
                            if (this.options.ranges) {
                                this.yylloc.range[1]++;
                            }

                            this._input = this._input.slice(1);
                            return ch;
                        },

                        // unshifts one char (or a string) into the input
                        unput: function unput(ch) {
                            var len = ch.length;
                            var lines = ch.split(/(?:\r\n?|\n)/g);

                            this._input = ch + this._input;
                            this.yytext = this.yytext.substr(0, this.yytext.length - len - 1);
                            //this.yyleng -= len;
                            this.offset -= len;
                            var oldLines = this.match.split(/(?:\r\n?|\n)/g);
                            this.match = this.match.substr(0, this.match.length - 1);
                            this.matched = this.matched.substr(0, this.matched.length - 1);

                            if (lines.length - 1) {
                                this.yylineno -= lines.length - 1;
                            }
                            var r = this.yylloc.range;

                            this.yylloc = {
                                first_line: this.yylloc.first_line,
                                last_line: this.yylineno + 1,
                                first_column: this.yylloc.first_column,
                                last_column: lines ? (lines.length === oldLines.length ? this.yylloc.first_column : 0) + oldLines[oldLines.length - lines.length].length - lines[0].length : this.yylloc.first_column - len
                            };

                            if (this.options.ranges) {
                                this.yylloc.range = [r[0], r[0] + this.yyleng - len];
                            }
                            this.yyleng = this.yytext.length;
                            return this;
                        },

                        // When called from action, caches matched text and appends it on next action
                        more: function more() {
                            this._more = true;
                            return this;
                        },

                        // When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
                        reject: function reject() {
                            if (this.options.backtrack_lexer) {
                                this._backtrack = true;
                            } else {
                                return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                                    text: "",
                                    token: null,
                                    line: this.yylineno
                                });
                            }
                            return this;
                        },

                        // retain first n characters of the match
                        less: function less(n) {
                            this.unput(this.match.slice(n));
                        },

                        // displays already matched input, i.e. for error messages
                        pastInput: function pastInput() {
                            var past = this.matched.substr(0, this.matched.length - this.match.length);
                            return (past.length > 20 ? '...' : '') + past.substr(-20).replace(/\n/g, "");
                        },

                        // displays upcoming input, i.e. for error messages
                        upcomingInput: function upcomingInput() {
                            var next = this.match;
                            if (next.length < 20) {
                                next += this._input.substr(0, 20 - next.length);
                            }
                            return (next.substr(0, 20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
                        },

                        // displays the character position where the lexing error occurred, i.e. for error messages
                        showPosition: function showPosition() {
                            var pre = this.pastInput();
                            var c = new Array(pre.length + 1).join("-");
                            return pre + this.upcomingInput() + "\n" + c + "^";
                        },

                        // test the lexed token: return FALSE when not a match, otherwise return token
                        test_match: function test_match(match, indexed_rule) {
                            var token, lines, backup;

                            if (this.options.backtrack_lexer) {
                                // save context
                                backup = {
                                    yylineno: this.yylineno,
                                    yylloc: {
                                        first_line: this.yylloc.first_line,
                                        last_line: this.last_line,
                                        first_column: this.yylloc.first_column,
                                        last_column: this.yylloc.last_column
                                    },
                                    yytext: this.yytext,
                                    match: this.match,
                                    matches: this.matches,
                                    matched: this.matched,
                                    yyleng: this.yyleng,
                                    offset: this.offset,
                                    _more: this._more,
                                    _input: this._input,
                                    yy: this.yy,
                                    conditionStack: this.conditionStack.slice(0),
                                    done: this.done
                                };
                                if (this.options.ranges) {
                                    backup.yylloc.range = this.yylloc.range.slice(0);
                                }
                            }

                            lines = match[0].match(/(?:\r\n?|\n).*/g);
                            if (lines) {
                                this.yylineno += lines.length;
                            }
                            this.yylloc = {
                                first_line: this.yylloc.last_line,
                                last_line: this.yylineno + 1,
                                first_column: this.yylloc.last_column,
                                last_column: lines ? lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + match[0].length
                            };
                            this.yytext += match[0];
                            this.match += match[0];
                            this.matches = match;
                            this.yyleng = this.yytext.length;
                            if (this.options.ranges) {
                                this.yylloc.range = [this.offset, this.offset += this.yyleng];
                            }
                            this._more = false;
                            this._backtrack = false;
                            this._input = this._input.slice(match[0].length);
                            this.matched += match[0];
                            token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
                            if (this.done && this._input) {
                                this.done = false;
                            }
                            if (token) {
                                return token;
                            } else if (this._backtrack) {
                                // recover context
                                for (var k in backup) {
                                    this[k] = backup[k];
                                }
                                return false; // rule action called reject() implying the next rule should be tested instead.
                            }
                            return false;
                        },

                        // return next match in input
                        next: function next() {
                            if (this.done) {
                                return this.EOF;
                            }
                            if (!this._input) {
                                this.done = true;
                            }

                            var token, match, tempMatch, index;
                            if (!this._more) {
                                this.yytext = '';
                                this.match = '';
                            }
                            var rules = this._currentRules();
                            for (var i = 0; i < rules.length; i++) {
                                tempMatch = this._input.match(this.rules[rules[i]]);
                                if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                                    match = tempMatch;
                                    index = i;
                                    if (this.options.backtrack_lexer) {
                                        token = this.test_match(tempMatch, rules[i]);
                                        if (token !== false) {
                                            return token;
                                        } else if (this._backtrack) {
                                            match = false;
                                            continue; // rule action called reject() implying a rule MISmatch.
                                        } else {
                                            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                                            return false;
                                        }
                                    } else if (!this.options.flex) {
                                        break;
                                    }
                                }
                            }
                            if (match) {
                                token = this.test_match(match, rules[index]);
                                if (token !== false) {
                                    return token;
                                }
                                // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                                return false;
                            }
                            if (this._input === "") {
                                return this.EOF;
                            } else {
                                return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                                    text: "",
                                    token: null,
                                    line: this.yylineno
                                });
                            }
                        },

                        // return next match that has a token
                        lex: function lex() {
                            var r = this.next();
                            if (r) {
                                return r;
                            } else {
                                return this.lex();
                            }
                        },

                        // activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
                        begin: function begin(condition) {
                            this.conditionStack.push(condition);
                        },

                        // pop the previously active lexer condition state off the condition stack
                        popState: function popState() {
                            var n = this.conditionStack.length - 1;
                            if (n > 0) {
                                return this.conditionStack.pop();
                            } else {
                                return this.conditionStack[0];
                            }
                        },

                        // produce the lexer rule set which is active for the currently active lexer condition state
                        _currentRules: function _currentRules() {
                            if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
                                return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
                            } else {
                                return this.conditions["INITIAL"].rules;
                            }
                        },

                        // return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
                        topState: function topState(n) {
                            n = this.conditionStack.length - 1 - Math.abs(n || 0);
                            if (n >= 0) {
                                return this.conditionStack[n];
                            } else {
                                return "INITIAL";
                            }
                        },

                        // alias for begin(condition)
                        pushState: function pushState(condition) {
                            this.begin(condition);
                        },

                        // return the number of states currently on the stack
                        stateStackSize: function stateStackSize() {
                            return this.conditionStack.length;
                        },
                        options: {},
                        performAction: function anonymous(yy, yy_, $avoiding_name_collisions, YY_START
                        /**/) {

                            var YYSTATE = YY_START;
                            switch ($avoiding_name_collisions) {
                                case 0:
                                    return 4;
                                    break;
                                case 1:
                                    return 14;
                                    break;
                                case 2:
                                    return 12;
                                    break;
                                case 3:
                                    return 15;
                                    break;
                                case 4:
                                    return 16;
                                    break;
                                case 5:
                                    return 22;
                                    break;
                                case 6:
                                    return 24;
                                    break;
                                case 7:
                                    return 28;
                                    break;
                                case 8:
                                    return 30;
                                    break;
                                case 9:
                                    return 18;
                                    break;
                                case 10:
                                    yy_.yytext = yy_.yytext.substr(1, yy_.yyleng - 2);return 32;
                                    break;
                                case 11:
                                    yy_.yytext = yy_.yytext.substr(1, yy_.yyleng - 2);return 33;
                                    break;
                                case 12:
                                    return 17;
                                    break;
                                case 13:
                                    return 31;
                                    break;
                            }
                        },
                        rules: [/^(?:\$)/, /^(?:\.\.)/, /^(?:\.)/, /^(?:\*)/, /^(?:[a-zA-Z_]+[a-zA-Z0-9_]*)/, /^(?:\[)/, /^(?:\])/, /^(?:,)/, /^(?:((-?(?:0|[1-9][0-9]*)))?\:((-?(?:0|[1-9][0-9]*)))?(\:((-?(?:0|[1-9][0-9]*)))?)?)/, /^(?:(-?(?:0|[1-9][0-9]*)))/, /^(?:"(?:\\["bfnrt/\\]|\\u[a-fA-F0-9]{4}|[^"\\])*")/, /^(?:'(?:\\['bfnrt/\\]|\\u[a-fA-F0-9]{4}|[^'\\])*')/, /^(?:\(.+?\)(?=\]))/, /^(?:\?\(.+?\)(?=\]))/],
                        conditions: { "INITIAL": { "rules": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], "inclusive": true } }
                    };
                    return lexer;
                }();
                parser.lexer = lexer;
                function Parser() {
                    this.yy = {};
                }
                Parser.prototype = parser;parser.Parser = Parser;
                return new Parser();
            }();

            // if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
            exports.parser = parser;
            exports.Parser = parser.Parser;
            exports.parse = function () {
                return parser.parse.apply(parser, arguments);
            };
            exports.main = function commonjsMain(args) {
                if (!args[1]) {
                    console.log('Usage: ' + args[0] + ' FILE');
                    process.exit(1);
                }
                var source = require('fs').readFileSync(require('path').normalize(args[1]), "utf8");
                return exports.parser.parse(source);
            };
            // if (typeof module !== 'undefined' && require.main === module) {
            //   exports.main(process.argv.slice(1));
            // }
            // }
        }
    };
});
//# sourceMappingURL=parser.js.map