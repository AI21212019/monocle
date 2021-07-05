str = s => bind(s, __Ink_String(`valueOf`))(s);
arr = bind(Object, __Ink_String(`values`));
hae = (tag, classList, attrs, events, children) => ({tag: str(tag), attrs: (() => {let __ink_assgn_trgt = __as_ink_string(attrs); __is_ink_string(__ink_assgn_trgt) ? __ink_assgn_trgt.assign((() => { return __Ink_String(`class`) })(), arr(map(classList, str))) : (__ink_assgn_trgt[(() => { return __Ink_String(`class`) })()]) = arr(map(classList, str)); return __ink_assgn_trgt})(), events: events, children: arr(map(children, child => __ink_match(type(child), [[() => (__Ink_String(`string`)), () => (str(child))], [() => (__Ink_Empty), () => (child)]])))});
ha = (tag, classList, attrs, children) => hae(tag, classList, attrs, {}, children);
h = (tag, classList, children) => hae(tag, classList, {}, {}, children);
Renderer = root => (() => { let InitialDom; let node; let render; let self; render = (() => {let __ink_acc_trgt = __as_ink_string((() => {let __ink_acc_trgt = __as_ink_string(window); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[Torus] || null : (__ink_acc_trgt.Torus !== undefined ? __ink_acc_trgt.Torus : null)})()); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[render] || null : (__ink_acc_trgt.render !== undefined ? __ink_acc_trgt.render : null)})(); InitialDom = h(__Ink_String(`div`), [], []); node = render(null, null, InitialDom); bind(root, __Ink_String(`appendChild`))(node); return self = {node: node, prev: InitialDom, update: jdom => (() => { (() => {let __ink_assgn_trgt = __as_ink_string(self); __is_ink_string(__ink_assgn_trgt) ? __ink_assgn_trgt.assign(node, render((() => {let __ink_acc_trgt = __as_ink_string(self); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[node] || null : (__ink_acc_trgt.node !== undefined ? __ink_acc_trgt.node : null)})(), (() => {let __ink_acc_trgt = __as_ink_string(self); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[prev] || null : (__ink_acc_trgt.prev !== undefined ? __ink_acc_trgt.prev : null)})(), jdom)) : (__ink_assgn_trgt.node) = render((() => {let __ink_acc_trgt = __as_ink_string(self); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[node] || null : (__ink_acc_trgt.node !== undefined ? __ink_acc_trgt.node : null)})(), (() => {let __ink_acc_trgt = __as_ink_string(self); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[prev] || null : (__ink_acc_trgt.prev !== undefined ? __ink_acc_trgt.prev : null)})(), jdom); return __ink_assgn_trgt})(); (() => {let __ink_assgn_trgt = __as_ink_string(self); __is_ink_string(__ink_assgn_trgt) ? __ink_assgn_trgt.assign(prev, jdom) : (__ink_assgn_trgt.prev) = jdom; return __ink_assgn_trgt})(); return (() => {let __ink_acc_trgt = __as_ink_string(self); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[node] || null : (__ink_acc_trgt.node !== undefined ? __ink_acc_trgt.node : null)})() })()} })()

std = load(__Ink_String(`std`));
log = (() => {let __ink_acc_trgt = __as_ink_string(std); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[log] || null : (__ink_acc_trgt.log !== undefined ? __ink_acc_trgt.log : null)})();
f = (() => {let __ink_acc_trgt = __as_ink_string(std); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[format] || null : (__ink_acc_trgt.format !== undefined ? __ink_acc_trgt.format : null)})();
Newline = char(10);
querySelector = bind(document, __Ink_String(`querySelector`));
EscapeContainer = bind(document, __Ink_String(`createElement`))(__Ink_String(`div`));
escapeHTML = s => (() => { (() => {let __ink_assgn_trgt = __as_ink_string(EscapeContainer); __is_ink_string(__ink_assgn_trgt) ? __ink_assgn_trgt.assign(textContent, s) : (__ink_assgn_trgt.textContent) = s; return __ink_assgn_trgt})(); return (() => {let __ink_acc_trgt = __as_ink_string(EscapeContainer); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[innerHTML] || null : (__ink_acc_trgt.innerHTML !== undefined ? __ink_acc_trgt.innerHTML : null)})() })();
escapeRegExp = s => s;
fastSlice = (s, start, end) => bind(str(s), __Ink_String(`substring`))(start, end);
clippedResultsCount = () => (() => { let ResultHeight; ResultHeight = 32; return floor(((() => { return ((() => {let __ink_acc_trgt = __as_ink_string(window); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[innerHeight] || null : (__ink_acc_trgt.innerHeight !== undefined ? __ink_acc_trgt.innerHeight : null)})() - 96) })() / ResultHeight)) })();
zeroFillTo3Digits = s => __ink_match(len(s), [[() => (0), () => (__Ink_String(`000`))], [() => (1), () => (__as_ink_string(__Ink_String(`00`) + s))], [() => (2), () => (__as_ink_string(__Ink_String(`0`) + s))], [() => (__Ink_Empty), () => (s)]]);
formatNumber = n => (() => { let __ink_trampolined_sub; let sub; let threeDigitStr; sub = (acc, n) => (() => { __ink_trampolined_sub = (acc, n) => __ink_match(n, [[() => (0), () => (acc)], [() => (__Ink_Empty), () => (__ink_trampoline(__ink_trampolined_sub, __as_ink_string(__as_ink_string(zeroFillTo3Digits(string((n % 1000))) + __Ink_String(`,`)) + acc), floor((n / 1000))))]]); return __ink_resolve_trampoline(__ink_trampolined_sub, acc, n) })(); return __ink_match(threeDigitStr = sub(zeroFillTo3Digits(string((n % 1000))), floor((n / 1000))), [[() => (__Ink_String(`000`)), () => (__Ink_String(`0`))], [() => (__Ink_Empty), () => (trimPrefix(threeDigitStr, __Ink_String(`0`)))]]) })();
applyHighlights = query => (() => { let queryTokenVariations; let replacementRegExp; let replacementRegExpStr; queryTokenVariations = tokenizeAndVary((() => {let __ink_acc_trgt = __as_ink_string(State); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[query] || null : (__ink_acc_trgt.query !== undefined ? __ink_acc_trgt.query : null)})()); replacementRegExpStr = __as_ink_string(__as_ink_string(__Ink_String(`(^|\\W)(`) + cat(escapeRegExp(queryTokenVariations), __Ink_String(`|`))) + __Ink_String(`)`)); replacementRegExp = jsnew(RegExp, [str(replacementRegExpStr), str(__Ink_String(`ig`))]); return s => bind(str(escapeHTML(s)), __Ink_String(`replaceAll`))(replacementRegExp, __Ink_String(`$1<span class="search-highlight">$2</span>`)) })();
State = {query: __Ink_String(``), docs: null, index: null, results: [], searchElapsedMs: 0, selectedIdx: 0, showPreview__ink_qm__: false, showAllResults__ink_qm__: false, theme: __Ink_String(`light`)};
ready__ink_qm__ = () => __ink_negate((() => { return __ink_or(__ink_eq((() => {let __ink_acc_trgt = __as_ink_string(State); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[docs] || null : (__ink_acc_trgt.docs !== undefined ? __ink_acc_trgt.docs : null)})(), null), __ink_eq((() => {let __ink_acc_trgt = __as_ink_string(State); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[index] || null : (__ink_acc_trgt.index !== undefined ? __ink_acc_trgt.index : null)})(), null)) })());
fetchDocs = () => (() => { let json; let req; req = fetch(__Ink_String(`/indexes/docs.json`)); json = bind(req, __Ink_String(`then`))(resp => bind(resp, __Ink_String(`json`))()); return bind(json, __Ink_String(`then`))(docs => (() => { (() => {let __ink_assgn_trgt = __as_ink_string(State); __is_ink_string(__ink_assgn_trgt) ? __ink_assgn_trgt.assign(docs, docs) : (__ink_assgn_trgt.docs) = docs; return __ink_assgn_trgt})(); return __ink_match(ready__ink_qm__(), [[() => (true), () => (performSearch((() => {let __ink_acc_trgt = __as_ink_string(State); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[query] || null : (__ink_acc_trgt.query !== undefined ? __ink_acc_trgt.query : null)})()))], [() => (__Ink_Empty), () => (render())]]) })()) })();
fetchIndex = () => (() => { let json; let req; req = fetch(__Ink_String(`/indexes/index.json`)); json = bind(req, __Ink_String(`then`))(resp => bind(resp, __Ink_String(`json`))()); return bind(json, __Ink_String(`then`))(index => (() => { (() => {let __ink_assgn_trgt = __as_ink_string(State); __is_ink_string(__ink_assgn_trgt) ? __ink_assgn_trgt.assign(index, index) : (__ink_assgn_trgt.index) = index; return __ink_assgn_trgt})(); return __ink_match(ready__ink_qm__(), [[() => (true), () => (performSearch((() => {let __ink_acc_trgt = __as_ink_string(State); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[query] || null : (__ink_acc_trgt.query !== undefined ? __ink_acc_trgt.query : null)})()))], [() => (__Ink_Empty), () => (render())]]) })()) })();
Link = (text, href) => ha(__Ink_String(`a`), [], {href: href, target: __Ink_String(`_blank`)}, [text]);
SearchBox = () => h(__Ink_String(`div`), [__Ink_String(`search-box`)], [hae(__Ink_String(`input`), [__Ink_String(`search-box-input`)], {value: (() => {let __ink_acc_trgt = __as_ink_string(State); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[query] || null : (__ink_acc_trgt.query !== undefined ? __ink_acc_trgt.query : null)})(), placeholder: __ink_match((() => {let __ink_acc_trgt = __as_ink_string(State); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[docs] || null : (__ink_acc_trgt.docs !== undefined ? __ink_acc_trgt.docs : null)})(), [[() => (null), () => (__Ink_String(`Type to search...`))], [() => (__Ink_Empty), () => (__as_ink_string(__as_ink_string(__Ink_String(`Type to search `) + formatNumber(len((() => {let __ink_acc_trgt = __as_ink_string(State); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[docs] || null : (__ink_acc_trgt.docs !== undefined ? __ink_acc_trgt.docs : null)})()))) + __Ink_String(` docs`)))]]), autofocus: true}, {input: evt => performSearch((() => {let __ink_acc_trgt = __as_ink_string((() => {let __ink_acc_trgt = __as_ink_string(evt); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[target] || null : (__ink_acc_trgt.target !== undefined ? __ink_acc_trgt.target : null)})()); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[value] || null : (__ink_acc_trgt.value !== undefined ? __ink_acc_trgt.value : null)})())}, [])]);
SearchResult = (doc, i, highlighter, maxPreviewChars) => (() => { let existingEl; return hae(__Ink_String(`li`), [__Ink_String(`search-result`), __ink_match((() => {let __ink_acc_trgt = __as_ink_string(State); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[selectedIdx] || null : (__ink_acc_trgt.selectedIdx !== undefined ? __ink_acc_trgt.selectedIdx : null)})(), [[() => (i), () => (__Ink_String(`selected`))], [() => (__Ink_Empty), () => (__Ink_String(``))]])], {}, {click: evt => (() => { (() => {let __ink_assgn_trgt = __as_ink_string(State); __is_ink_string(__ink_assgn_trgt) ? __ink_assgn_trgt.assign(selectedIdx, i) : (__ink_assgn_trgt.selectedIdx) = i; return __ink_assgn_trgt})(); (() => {let __ink_assgn_trgt = __as_ink_string(State); __is_ink_string(__ink_assgn_trgt) ? __ink_assgn_trgt.assign(showPreview__ink_qm__, true) : (__ink_assgn_trgt.showPreview__ink_qm__) = true; return __ink_assgn_trgt})(); return render() })()}, [h(__Ink_String(`span`), [__Ink_String(`search-result-module`)], [(() => {let __ink_acc_trgt = __as_ink_string(doc); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[module] || null : (__ink_acc_trgt.module !== undefined ? __ink_acc_trgt.module : null)})()]), __ink_match((() => {let __ink_acc_trgt = __as_ink_string(doc); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[title] || null : (__ink_acc_trgt.title !== undefined ? __ink_acc_trgt.title : null)})(), [[() => (null), () => (null)], [() => (__Ink_Empty), () => (h(__Ink_String(`span`), [__Ink_String(`search-result-title`)], [(() => {let __ink_acc_trgt = __as_ink_string(doc); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[title] || null : (__ink_acc_trgt.title !== undefined ? __ink_acc_trgt.title : null)})(), __Ink_String(` · `)]))]]), __ink_match(existingEl = querySelector(__as_ink_string(__as_ink_string(__Ink_String(`[data-doc-id="`) + (() => {let __ink_acc_trgt = __as_ink_string(doc); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[id] || null : (__ink_acc_trgt.id !== undefined ? __ink_acc_trgt.id : null)})()) + __Ink_String(`"]`))), [[() => (null), () => ((() => { let container; let ellipsis; container = bind(document, __Ink_String(`createElement`))(__Ink_String(`span`)); bind(container, __Ink_String(`setAttribute`))(__Ink_String(`data-doc-id`), (() => {let __ink_acc_trgt = __as_ink_string(doc); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[id] || null : (__ink_acc_trgt.id !== undefined ? __ink_acc_trgt.id : null)})()); (() => {let __ink_assgn_trgt = __as_ink_string(container); __is_ink_string(__ink_assgn_trgt) ? __ink_assgn_trgt.assign(className, __Ink_String(`search-result-content`)) : (__ink_assgn_trgt.className) = __Ink_String(`search-result-content`); return __ink_assgn_trgt})(); ellipsis = (() => { return __ink_match((len((() => {let __ink_acc_trgt = __as_ink_string(doc); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[content] || null : (__ink_acc_trgt.content !== undefined ? __ink_acc_trgt.content : null)})()) > maxPreviewChars), [[() => (true), () => (__Ink_String(`...`))], [() => (__Ink_Empty), () => (__Ink_String(``))]]) })(); (() => {let __ink_assgn_trgt = __as_ink_string(container); __is_ink_string(__ink_assgn_trgt) ? __ink_assgn_trgt.assign(innerHTML, __as_ink_string(highlighter(fastSlice((() => {let __ink_acc_trgt = __as_ink_string(doc); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[content] || null : (__ink_acc_trgt.content !== undefined ? __ink_acc_trgt.content : null)})(), 0, maxPreviewChars)) + ellipsis)) : (__ink_assgn_trgt.innerHTML) = __as_ink_string(highlighter(fastSlice((() => {let __ink_acc_trgt = __as_ink_string(doc); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[content] || null : (__ink_acc_trgt.content !== undefined ? __ink_acc_trgt.content : null)})(), 0, maxPreviewChars)) + ellipsis); return __ink_assgn_trgt})(); return container })())], [() => (__Ink_Empty), () => (existingEl)]])]) })();
KeyboardMap = h(__Ink_String(`div`), [__Ink_String(`keyboard-map`)], [h(__Ink_String(`ul`), [__Ink_String(`keyboard-map-list`)], (() => { let Keybindings; Keybindings = {[__Ink_String(`Tab`)]: __Ink_String(`Move down search result`), [__Ink_String(`Shift Tab`)]: __Ink_String(`Move up search result`), [__Ink_String(`Enter`)]: __Ink_String(`Show preview pane`), [__Ink_String(`Escape`)]: __Ink_String(`Hide preview pane, clear search`), [__Ink_String(`/`)]: __Ink_String(`Focus search field`), [__Ink_String(`\``)]: __Ink_String(`Switch light/dark color theme`)}; return map(keys(Keybindings), keybinding => h(__Ink_String(`li`), [__Ink_String(`keyboard-map-item`)], [h(__Ink_String(`div`), [__Ink_String(`keybinding-keys`)], map(split(keybinding, __Ink_String(` `)), key => h(__Ink_String(`kbd`), [], [key]))), h(__Ink_String(`div`), [__Ink_String(`keybinding-detail`)], [(() => {let __ink_acc_trgt = __as_ink_string(Keybindings); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[(() => { return keybinding })()] || null : (__ink_acc_trgt[(() => { return keybinding })()] !== undefined ? __ink_acc_trgt[(() => { return keybinding })()] : null)})()])])) })())]);
About = h(__Ink_String(`div`), [__Ink_String(`about`)], [h(__Ink_String(`p`), [], [__Ink_String(`Monocle is a universal, personal search engine by `), Link(__Ink_String(`Linus`), __Ink_String(`https://thesephist.com`)), __Ink_String(`. It's built with `), Link(__Ink_String(`Ink`), __Ink_String(`https://dotink.co`)), __Ink_String(` and `), Link(__Ink_String(`Torus`), __Ink_String(`https://github.com/thesephist/torus`)), __Ink_String(`, and open source on `), Link(__Ink_String(`GitHub`), __Ink_String(`https://github.com/thesephist/monocle`)), __Ink_String(`.`)]), h(__Ink_String(`p`), [], [__Ink_String(`Monocle is powered by a full-text indexing and search engine written in
		pure Ink, and searches across Linus's blogs and private note archives,
		contacts, tweets, and over a decade of journals.`)])]);
SearchResults = () => __ink_match(__ink_eq(len((() => {let __ink_acc_trgt = __as_ink_string(State); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[query] || null : (__ink_acc_trgt.query !== undefined ? __ink_acc_trgt.query : null)})()), 0), [[() => (true), () => (h(__Ink_String(`div`), [__Ink_String(`search-results`), __Ink_String(`search-results-empty`)], [h(__Ink_String(`h2`), [__Ink_String(`empty-state-heading`)], [__Ink_String(`Suggestions`)]), h(__Ink_String(`div`), [__Ink_String(`search-results-suggestions`)], (() => { return map([__Ink_String(`linus lee`), __Ink_String(`side project idea`), __Ink_String(`taylor swift`), __Ink_String(`uc berkeley`), __Ink_String(`new york city`)], term => hae(__Ink_String(`button`), [__Ink_String(`search-results-suggestion`)], {}, {click: evt => performSearch(term)}, [term])) })()), h(__Ink_String(`h2`), [__Ink_String(`empty-state-heading`)], [__Ink_String(`Keybindings`)]), KeyboardMap, h(__Ink_String(`h2`), [__Ink_String(`empty-state-heading`)], [__Ink_String(`About Monocle`)]), About]))], [() => (__Ink_Empty), () => (h(__Ink_String(`div`), [__Ink_String(`search-results`)], [h(__Ink_String(`ol`), [__Ink_String(`search-results-list`)], (() => { let highlighter; let maxPreviewChars; let results; maxPreviewChars = floor(((() => {let __ink_acc_trgt = __as_ink_string(window); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[innerWidth] || null : (__ink_acc_trgt.innerWidth !== undefined ? __ink_acc_trgt.innerWidth : null)})() / 6)); highlighter = applyHighlights((() => {let __ink_acc_trgt = __as_ink_string(State); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[query] || null : (__ink_acc_trgt.query !== undefined ? __ink_acc_trgt.query : null)})()); results = (() => { return __ink_match((() => {let __ink_acc_trgt = __as_ink_string(State); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[showAllResults__ink_qm__] || null : (__ink_acc_trgt.showAllResults__ink_qm__ !== undefined ? __ink_acc_trgt.showAllResults__ink_qm__ : null)})(), [[() => (true), () => ((() => {let __ink_acc_trgt = __as_ink_string(State); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[results] || null : (__ink_acc_trgt.results !== undefined ? __ink_acc_trgt.results : null)})())], [() => (__Ink_Empty), () => (slice((() => {let __ink_acc_trgt = __as_ink_string(State); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[results] || null : (__ink_acc_trgt.results !== undefined ? __ink_acc_trgt.results : null)})(), 0, clippedResultsCount()))]]) })(); return map(results, (result, i) => SearchResult(result, i, highlighter, maxPreviewChars)) })()), __ink_match(__ink_and(__ink_negate((() => { return (() => {let __ink_acc_trgt = __as_ink_string(State); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[showAllResults__ink_qm__] || null : (__ink_acc_trgt.showAllResults__ink_qm__ !== undefined ? __ink_acc_trgt.showAllResults__ink_qm__ : null)})() })()), (len((() => {let __ink_acc_trgt = __as_ink_string(State); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[results] || null : (__ink_acc_trgt.results !== undefined ? __ink_acc_trgt.results : null)})()) > clippedResultsCount())), [[() => (true), () => (hae(__Ink_String(`button`), [__Ink_String(`search-results-show-all`)], {}, {click: () => render((() => {let __ink_assgn_trgt = __as_ink_string(State); __is_ink_string(__ink_assgn_trgt) ? __ink_assgn_trgt.assign(showAllResults__ink_qm__, true) : (__ink_assgn_trgt.showAllResults__ink_qm__) = true; return __ink_assgn_trgt})())}, [__Ink_String(`Show more ...`)]))]]), h(__Ink_String(`div`), [__Ink_String(`search-results-bottom-padding`)], [])]))]]);
Sidebar = () => h(__Ink_String(`div`), [__Ink_String(`sidebar`)], [SearchBox(), h(__Ink_String(`div`), [__Ink_String(`sidebar-stats`)], [__ink_match(ready__ink_qm__(), [[() => (false), () => (__Ink_String(`loading index...`))], [() => (__Ink_Empty), () => (h(__Ink_String(`div`), [__Ink_String(`sidebar-result-stats`)], [f(__Ink_String(`{{ 0 }} results ({{ 1 }}ms)`), [len((() => {let __ink_acc_trgt = __as_ink_string(State); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[results] || null : (__ink_acc_trgt.results !== undefined ? __ink_acc_trgt.results : null)})()), (() => {let __ink_acc_trgt = __as_ink_string(State); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[searchElapsedMs] || null : (__ink_acc_trgt.searchElapsedMs !== undefined ? __ink_acc_trgt.searchElapsedMs : null)})()])]))]])]), SearchResults()]);
DocPreview = () => h(__Ink_String(`div`), [__Ink_String(`doc-preview`)], (() => { let href; let selectedDoc; let title; selectedDoc = (() => {let __ink_acc_trgt = __as_ink_string((() => {let __ink_acc_trgt = __as_ink_string(State); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[results] || null : (__ink_acc_trgt.results !== undefined ? __ink_acc_trgt.results : null)})()); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[(() => { return (() => {let __ink_acc_trgt = __as_ink_string(State); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[selectedIdx] || null : (__ink_acc_trgt.selectedIdx !== undefined ? __ink_acc_trgt.selectedIdx : null)})() })()] || null : (__ink_acc_trgt[(() => { return (() => {let __ink_acc_trgt = __as_ink_string(State); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[selectedIdx] || null : (__ink_acc_trgt.selectedIdx !== undefined ? __ink_acc_trgt.selectedIdx : null)})() })()] !== undefined ? __ink_acc_trgt[(() => { return (() => {let __ink_acc_trgt = __as_ink_string(State); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[selectedIdx] || null : (__ink_acc_trgt.selectedIdx !== undefined ? __ink_acc_trgt.selectedIdx : null)})() })()] : null)})(); return [h(__Ink_String(`div`), [__Ink_String(`doc-preview-buttons`)], [hae(__Ink_String(`button`), [__Ink_String(`button`), __Ink_String(`doc-preview-close`)], {title: __Ink_String(`Close preview`)}, {click: evt => render((() => {let __ink_assgn_trgt = __as_ink_string(State); __is_ink_string(__ink_assgn_trgt) ? __ink_assgn_trgt.assign(showPreview__ink_qm__, false) : (__ink_assgn_trgt.showPreview__ink_qm__) = false; return __ink_assgn_trgt})())}, [__Ink_String(`×`)]), __ink_match(selectedDoc, [[() => (null), () => (null)], [() => (__Ink_Empty), () => (__ink_match(href = (() => {let __ink_acc_trgt = __as_ink_string(selectedDoc); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[href] || null : (__ink_acc_trgt.href !== undefined ? __ink_acc_trgt.href : null)})(), [[() => (null), () => (null)], [() => (__Ink_Empty), () => (ha(__Ink_String(`a`), [__Ink_String(`button`), __Ink_String(`doc-preview-open`)], {title: __Ink_String(`Open on new page`), href: href, target: __Ink_String(`_blank`)}, [__Ink_String(`open →`)]))]]))]]), __ink_match(selectedDoc, [[() => (null), () => (null)], [() => (__Ink_Empty), () => (__ink_match(title = (() => {let __ink_acc_trgt = __as_ink_string(selectedDoc); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[title] || null : (__ink_acc_trgt.title !== undefined ? __ink_acc_trgt.title : null)})(), [[() => (null), () => (null)], [() => (__Ink_Empty), () => (h(__Ink_String(`p`), [__Ink_String(`doc-preview-title`)], [title]))]]))]])]), __ink_match(selectedDoc, [[() => (null), () => (h(__Ink_String(`div`), [__Ink_String(`doc-preview-empty`)], [__Ink_String(`Search & pick a result to view it here.`)]))], [() => (__Ink_Empty), () => (h(__Ink_String(`div`), [__Ink_String(`doc-preview-content`)], (() => { let highlighter; highlighter = applyHighlights((() => {let __ink_acc_trgt = __as_ink_string(State); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[query] || null : (__ink_acc_trgt.query !== undefined ? __ink_acc_trgt.query : null)})()); return map(split((() => {let __ink_acc_trgt = __as_ink_string(selectedDoc); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[content] || null : (__ink_acc_trgt.content !== undefined ? __ink_acc_trgt.content : null)})(), Newline), para => (() => { let p; p = bind(document, __Ink_String(`createElement`))(__Ink_String(`p`)); (() => {let __ink_assgn_trgt = __as_ink_string(p); __is_ink_string(__ink_assgn_trgt) ? __ink_assgn_trgt.assign(innerHTML, highlighter(para)) : (__ink_assgn_trgt.innerHTML) = highlighter(para); return __ink_assgn_trgt})(); return p })()) })()))]])] })());
performSearch = query => (() => { let start; (() => {let __ink_assgn_trgt = __as_ink_string(State); __is_ink_string(__ink_assgn_trgt) ? __ink_assgn_trgt.assign(query, query) : (__ink_assgn_trgt.query) = query; return __ink_assgn_trgt})(); start = time(); (() => {let __ink_assgn_trgt = __as_ink_string(State); __is_ink_string(__ink_assgn_trgt) ? __ink_assgn_trgt.assign(results, findDocs((() => {let __ink_acc_trgt = __as_ink_string(State); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[index] || null : (__ink_acc_trgt.index !== undefined ? __ink_acc_trgt.index : null)})(), (() => {let __ink_acc_trgt = __as_ink_string(State); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[docs] || null : (__ink_acc_trgt.docs !== undefined ? __ink_acc_trgt.docs : null)})(), query)) : (__ink_assgn_trgt.results) = findDocs((() => {let __ink_acc_trgt = __as_ink_string(State); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[index] || null : (__ink_acc_trgt.index !== undefined ? __ink_acc_trgt.index : null)})(), (() => {let __ink_acc_trgt = __as_ink_string(State); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[docs] || null : (__ink_acc_trgt.docs !== undefined ? __ink_acc_trgt.docs : null)})(), query); return __ink_assgn_trgt})(); (() => {let __ink_assgn_trgt = __as_ink_string(State); __is_ink_string(__ink_assgn_trgt) ? __ink_assgn_trgt.assign(searchElapsedMs, floor(((() => { return (time() - start) })() * 1000))) : (__ink_assgn_trgt.searchElapsedMs) = floor(((() => { return (time() - start) })() * 1000)); return __ink_assgn_trgt})(); (() => {let __ink_assgn_trgt = __as_ink_string(State); __is_ink_string(__ink_assgn_trgt) ? __ink_assgn_trgt.assign(selectedIdx, 0) : (__ink_assgn_trgt.selectedIdx) = 0; return __ink_assgn_trgt})(); (() => {let __ink_assgn_trgt = __as_ink_string(State); __is_ink_string(__ink_assgn_trgt) ? __ink_assgn_trgt.assign(showAllResults__ink_qm__, false) : (__ink_assgn_trgt.showAllResults__ink_qm__) = false; return __ink_assgn_trgt})(); __ink_match(trim(query, __Ink_String(` `)), [[() => (__Ink_String(``)), () => ((() => { let url; (() => {let __ink_assgn_trgt = __as_ink_string(State); __is_ink_string(__ink_assgn_trgt) ? __ink_assgn_trgt.assign(showPreview__ink_qm__, false) : (__ink_assgn_trgt.showPreview__ink_qm__) = false; return __ink_assgn_trgt})(); url = jsnew(URL, [(() => {let __ink_acc_trgt = __as_ink_string(location); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[href] || null : (__ink_acc_trgt.href !== undefined ? __ink_acc_trgt.href : null)})()]); bind((() => {let __ink_acc_trgt = __as_ink_string(url); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[searchParams] || null : (__ink_acc_trgt.searchParams !== undefined ? __ink_acc_trgt.searchParams : null)})(), __Ink_String(`delete`))(__Ink_String(`q`)); bind(history, __Ink_String(`replaceState`))(null, null, url); return (() => {let __ink_assgn_trgt = __as_ink_string(document); __is_ink_string(__ink_assgn_trgt) ? __ink_assgn_trgt.assign(title, __Ink_String(`Monocle`)) : (__ink_assgn_trgt.title) = __Ink_String(`Monocle`); return __ink_assgn_trgt})() })())], [() => (__Ink_Empty), () => ((() => { let url; url = jsnew(URL, [(() => {let __ink_acc_trgt = __as_ink_string(location); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[href] || null : (__ink_acc_trgt.href !== undefined ? __ink_acc_trgt.href : null)})()]); bind((() => {let __ink_acc_trgt = __as_ink_string(url); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[searchParams] || null : (__ink_acc_trgt.searchParams !== undefined ? __ink_acc_trgt.searchParams : null)})(), __Ink_String(`set`))(__Ink_String(`q`), trim(query, __Ink_String(` `))); bind(history, __Ink_String(`replaceState`))(null, null, url); return (() => {let __ink_assgn_trgt = __as_ink_string(document); __is_ink_string(__ink_assgn_trgt) ? __ink_assgn_trgt.assign(title, f(__Ink_String(`"{{ query }}" | Monocle`), State)) : (__ink_assgn_trgt.title) = f(__Ink_String(`"{{ query }}" | Monocle`), State); return __ink_assgn_trgt})() })())]]); return render() })();
root = bind(document, __Ink_String(`querySelector`))(__Ink_String(`#root`));
r = Renderer(root);
update = (() => {let __ink_acc_trgt = __as_ink_string(r); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[update] || null : (__ink_acc_trgt.update !== undefined ? __ink_acc_trgt.update : null)})();
render = () => update(h(__Ink_String(`div`), [__Ink_String(`app`)], [Sidebar(), __ink_match((() => {let __ink_acc_trgt = __as_ink_string(State); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[showPreview__ink_qm__] || null : (__ink_acc_trgt.showPreview__ink_qm__ !== undefined ? __ink_acc_trgt.showPreview__ink_qm__ : null)})(), [[() => (true), () => (DocPreview())]])]));
selectDown = evt => (() => { let el; bind(evt, __Ink_String(`preventDefault`))(); (() => {let __ink_assgn_trgt = __as_ink_string(State); __is_ink_string(__ink_assgn_trgt) ? __ink_assgn_trgt.assign(selectedIdx, ((() => { return __as_ink_string((() => {let __ink_acc_trgt = __as_ink_string(State); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[selectedIdx] || null : (__ink_acc_trgt.selectedIdx !== undefined ? __ink_acc_trgt.selectedIdx : null)})() + 1) })() % len((() => {let __ink_acc_trgt = __as_ink_string(State); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[results] || null : (__ink_acc_trgt.results !== undefined ? __ink_acc_trgt.results : null)})()))) : (__ink_assgn_trgt.selectedIdx) = ((() => { return __as_ink_string((() => {let __ink_acc_trgt = __as_ink_string(State); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[selectedIdx] || null : (__ink_acc_trgt.selectedIdx !== undefined ? __ink_acc_trgt.selectedIdx : null)})() + 1) })() % len((() => {let __ink_acc_trgt = __as_ink_string(State); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[results] || null : (__ink_acc_trgt.results !== undefined ? __ink_acc_trgt.results : null)})())); return __ink_assgn_trgt})(); render(); return __ink_match(el = querySelector(__Ink_String(`.search-result.selected`)), [[() => (null), () => (null)], [() => (__Ink_Empty), () => (bind(el, __Ink_String(`scrollIntoView`))({block: __Ink_String(`nearest`)}))]]) })();
selectUp = evt => (() => { let el; bind(evt, __Ink_String(`preventDefault`))(); (() => {let __ink_assgn_trgt = __as_ink_string(State); __is_ink_string(__ink_assgn_trgt) ? __ink_assgn_trgt.assign(selectedIdx, ((() => { return (__as_ink_string(len((() => {let __ink_acc_trgt = __as_ink_string(State); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[results] || null : (__ink_acc_trgt.results !== undefined ? __ink_acc_trgt.results : null)})()) + (() => {let __ink_acc_trgt = __as_ink_string(State); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[selectedIdx] || null : (__ink_acc_trgt.selectedIdx !== undefined ? __ink_acc_trgt.selectedIdx : null)})()) - 1) })() % len((() => {let __ink_acc_trgt = __as_ink_string(State); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[results] || null : (__ink_acc_trgt.results !== undefined ? __ink_acc_trgt.results : null)})()))) : (__ink_assgn_trgt.selectedIdx) = ((() => { return (__as_ink_string(len((() => {let __ink_acc_trgt = __as_ink_string(State); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[results] || null : (__ink_acc_trgt.results !== undefined ? __ink_acc_trgt.results : null)})()) + (() => {let __ink_acc_trgt = __as_ink_string(State); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[selectedIdx] || null : (__ink_acc_trgt.selectedIdx !== undefined ? __ink_acc_trgt.selectedIdx : null)})()) - 1) })() % len((() => {let __ink_acc_trgt = __as_ink_string(State); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[results] || null : (__ink_acc_trgt.results !== undefined ? __ink_acc_trgt.results : null)})())); return __ink_assgn_trgt})(); render(); return __ink_match(el = querySelector(__Ink_String(`.search-result.selected`)), [[() => (null), () => (null)], [() => (__Ink_Empty), () => (bind(el, __Ink_String(`scrollIntoView`))({block: __Ink_String(`nearest`)}))]]) })();
bind((() => {let __ink_acc_trgt = __as_ink_string(document); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[body] || null : (__ink_acc_trgt.body !== undefined ? __ink_acc_trgt.body : null)})(), __Ink_String(`addEventListener`))(__Ink_String(`keydown`), evt => (() => { let searchBox; return __ink_match((() => {let __ink_acc_trgt = __as_ink_string(evt); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[key] || null : (__ink_acc_trgt.key !== undefined ? __ink_acc_trgt.key : null)})(), [[() => (__Ink_String(`Tab`)), () => (__ink_match((() => {let __ink_acc_trgt = __as_ink_string(evt); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[shiftKey] || null : (__ink_acc_trgt.shiftKey !== undefined ? __ink_acc_trgt.shiftKey : null)})(), [[() => (true), () => (selectUp(evt))], [() => (__Ink_Empty), () => (selectDown(evt))]]))], [() => (__Ink_String(`ArrowUp`)), () => (selectUp(evt))], [() => (__Ink_String(`ArrowDown`)), () => (selectDown(evt))], [() => (__Ink_String(`Enter`)), () => (render((() => {let __ink_assgn_trgt = __as_ink_string(State); __is_ink_string(__ink_assgn_trgt) ? __ink_assgn_trgt.assign(showPreview__ink_qm__, true) : (__ink_assgn_trgt.showPreview__ink_qm__) = true; return __ink_assgn_trgt})()))], [() => (__Ink_String(`Escape`)), () => (__ink_match((() => {let __ink_acc_trgt = __as_ink_string(State); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[showPreview__ink_qm__] || null : (__ink_acc_trgt.showPreview__ink_qm__ !== undefined ? __ink_acc_trgt.showPreview__ink_qm__ : null)})(), [[() => (true), () => (render((() => {let __ink_assgn_trgt = __as_ink_string(State); __is_ink_string(__ink_assgn_trgt) ? __ink_assgn_trgt.assign(showPreview__ink_qm__, false) : (__ink_assgn_trgt.showPreview__ink_qm__) = false; return __ink_assgn_trgt})()))], [() => (__Ink_Empty), () => (performSearch(__Ink_String(``)))]]))], [() => (__Ink_String(`/`)), () => (__ink_match(searchBox = querySelector(__Ink_String(`.search-box-input`)), [[() => (null), () => (null)], [() => (__Ink_Empty), () => ((() => { bind(evt, __Ink_String(`preventDefault`))(); return bind(searchBox, __Ink_String(`focus`))() })())]]))], [() => (__Ink_String(`\``)), () => ((() => { bind(evt, __Ink_String(`preventDefault`))(); (() => {let __ink_assgn_trgt = __as_ink_string(State); __is_ink_string(__ink_assgn_trgt) ? __ink_assgn_trgt.assign(theme, (() => { return __ink_match((() => {let __ink_acc_trgt = __as_ink_string(State); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[theme] || null : (__ink_acc_trgt.theme !== undefined ? __ink_acc_trgt.theme : null)})(), [[() => (__Ink_String(`dark`)), () => (__Ink_String(`light`))], [() => (__Ink_Empty), () => (__Ink_String(`dark`))]]) })()) : (__ink_assgn_trgt.theme) = (() => { return __ink_match((() => {let __ink_acc_trgt = __as_ink_string(State); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[theme] || null : (__ink_acc_trgt.theme !== undefined ? __ink_acc_trgt.theme : null)})(), [[() => (__Ink_String(`dark`)), () => (__Ink_String(`light`))], [() => (__Ink_Empty), () => (__Ink_String(`dark`))]]) })(); return __ink_assgn_trgt})(); bind((() => {let __ink_acc_trgt = __as_ink_string((() => {let __ink_acc_trgt = __as_ink_string(document); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[body] || null : (__ink_acc_trgt.body !== undefined ? __ink_acc_trgt.body : null)})()); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[classList] || null : (__ink_acc_trgt.classList !== undefined ? __ink_acc_trgt.classList : null)})(), __Ink_String(`toggle`))(__Ink_String(`dark`), __ink_eq((() => {let __ink_acc_trgt = __as_ink_string(State); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[theme] || null : (__ink_acc_trgt.theme !== undefined ? __ink_acc_trgt.theme : null)})(), __Ink_String(`dark`))); return render() })())]]) })());
__ink_match(query = bind((() => {let __ink_acc_trgt = __as_ink_string(jsnew(URL, [(() => {let __ink_acc_trgt = __as_ink_string(location); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[href] || null : (__ink_acc_trgt.href !== undefined ? __ink_acc_trgt.href : null)})()])); return __is_ink_string(__ink_acc_trgt) ? __ink_acc_trgt.valueOf()[searchParams] || null : (__ink_acc_trgt.searchParams !== undefined ? __ink_acc_trgt.searchParams : null)})(), __Ink_String(`get`))(__Ink_String(`q`)), [[() => (__Ink_String(``)), () => (null)], [() => (null), () => (null)], [() => (__Ink_Empty), () => ((() => {let __ink_assgn_trgt = __as_ink_string(State); __is_ink_string(__ink_assgn_trgt) ? __ink_assgn_trgt.assign(query, query) : (__ink_assgn_trgt.query) = query; return __ink_assgn_trgt})())]]);
fetchDocs();
fetchIndex();
render()

