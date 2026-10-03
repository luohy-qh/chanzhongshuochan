// 博文分类数据
const categories = {
    chan: {
        name: "缠中说禅",
        articles: ["xu", "yi", "er", "san", "si", "wu", "liu", "qi", "ba", "jiu", "shi", "shiyi", "shier", "shisan", "shisi", "shiwu", "shiliu", "shiqi", "shiba", "shijiu", "ershi", "ershiyi", "ershier", "ershisan", "ershisi", "ershiwu", "ershiliu", "chenjianmin1", "chenjianmin2", "chenjianmin3", "zazen01", "zazen02", "zazen03", "zazen04", "zazen05", "zazen06", "zazen07", "zazen08", "zazen09", "zazen10", "zazen11", "zazen12", "zazen13", "zazen14", "zazen15", "zazen16", "zazen17", "zazen18", "zazen19", "zazen20", "zazen21", "zazen22", "zazen23", "zazen24", "zazen25", "zazen26", "zazen27", "zazen28", "zazen29", "zazen30"]
    },
    stock: {
        name: "教你炒股票相关",
        articles: ["stock000", "stock000a", "stock000b", "stock001", "stock002", "stock003", "stock003a", "stock004", "stock004a", "stock005", "stock005a", "stock005b", "stock005c", "stock005d", "stock005e", "stock005f", "stock005g", "stock005h", "stock005i", "stock005j", "stock006", "stock007", "stock008", "stock008a", "stock009", "stock009a", "stock010", "stock010a", "stock010b", "stock011", "stock011a", "stock012", "stock013", "stock014", "stock014a", "stock014b", "stock015", "stock015a", "stock015b", "stock015c", "stock016", "stock016a", "stock017", "stock017a", "stock017b", "stock017c", "stock017d", "stock018", "stock019", "stock019a", "stock019b", "stock019c", "stock020", "stock020a", "stock021", "stock021a", "stock022", "stock022a", "stock022b", "stock023", "stock023a", "stock023b", "stock024", "stock024a", "stock024b", "stock025", "stock025a", "stock025b", "stock025c", "stock026", "stock026a", "stock026b", "stock027", "stock027a", "stock028", "stock028a", "stock028b", "stock028c", "stock029", "stock029a", "stock029b", "stock030", "stock030a", "stock031", "stock031a", "stock031b", "stock031c", "stock032", "stock032a", "stock033", "stock033a", "stock033b", "stock034", "stock034a", "stock035", "stock035a", "stock036", "stock036a", "stock036b", "stock037", "stock037a", "stock037b", "stock038", "stock038a", "stock039", "stock039a", "stock040", "stock040a", "stock040b", "stock041", "stock041a", "stock041b", "stock042", "stock042a", "stock043", "stock043a", "stock044", "stock044a", "stock045", "stock045a", "stock045b", "stock045c", "stock046", "stock046a", "stock047", "stock047a", "stock048", "stock048a", "stock049", "stock050", "stock050a", "stock050b", "stock051", "stock051a", "stock051b", "stock051c", "stock051d", "stock051e", "stock051f", "stock052", "stock052a", "stock052b", "stock053", "stock054", "stock054a", "stock055", "stock055a", "stock055b", "stock056", "stock057", "stock057a", "stock057b", "stock058", "stock058a", "stock058b", "stock058c", "stock058d", "stock059", "stock059a", "stock060", "stock060a", "stock061", "stock061a", "stock061b", "stock061c", "stock061d", "stock061e", "stock061f", "stock062", "stock062a", "stock063", "stock063a", "stock064", "stock064a", "stock064b", "stock064c", "stock064d", "stock064e", "stock064f", "stock064g", "stock064h", "stock064i", "stock064j", "stock064k", "stock064l", "stock064m", "stock064n", "stock065", "stock065a", "stock065b", "stock065c", "stock065d", "stock065e", "stock065f", "stock065g", "stock065h", "stock065i", "stock065j", "stock065k", "stock066", "stock066a", "stock066b", "stock067", "stock067a", "stock067b", "stock068", "stock068a", "stock068b", "stock068c", "stock068d", "stock068e", "stock069", "stock069a", "stock069b", "stock069c", "stock069d", "stock069e", "stock069f", "stock069g", "stock070", "stock070a", "stock071", "stock071a", "stock071b", "stock071c", "stock071d", "stock072", "stock072a", "stock072b", "stock072c", "stock073", "stock073a", "stock073b", "stock073c", "stock074", "stock074a", "stock074b", "stock075", "stock075a", "stock075b", "stock075c", "stock075d", "stock076", "stock076a", "stock076b", "stock077", "stock077a", "stock078", "stock078a", "stock078b", "stock078c", "stock079", "stock079a", "stock080", "stock080a", "stock080b", "stock080c", "stock080d", "stock080e", "stock080f", "stock080g", "stock081", "stock081a", "stock081b", "stock081c", "stock081d", "stock081e", "stock081f", "stock081g", "stock081h", "stock081i", "stock082", "stock083", "stock083a", "stock083b", "stock083c", "stock084", "stock084a", "stock084b", "stock084c", "stock084d", "stock084e", "stock084f", "stock084g", "stock084h", "stock084i", "stock084j", "stock084k", "stock084l", "stock084m", "stock084n", "stock084o", "stock084p", "stock084q", "stock084r", "stock084s", "stock084t", "stock084u", "stock085a", "stock085b", "stock085c", "stock085", "stock086", "stock086a", "stock086b", "stock086c", "stock086d", "stock086e", "stock086f", "stock086g", "stock086h", "stock087", "stock087a", "stock087b", "stock087c", "stock087d", "stock087e", "stock087f", "stock088", "stock088a", "stock088b", "stock088c", "stock088d", "stock088e", "stock088f", "stock088g", "stock088h", "stock088i", "stock089", "stock089a", "stock089b", "stock089c", "stock089d", "stock089e", "stock089f", "stock089g", "stock089h", "stock089i", "stock089j", "stock089k", "stock089l", "stock089m", "stock089n", "stock089o", "stock089p", "stock090", "stock090a", "stock090b", "stock090c", "stock090d", "stock090e", "stock090f", "stock090g", "stock090h", "stock090i", "stock090j", "stock090k", "stock090l", "stock090m", "stock090n", "stock090o", "stock090p", "stock091", "stock091a", "stock091b", "stock091d", "stock091e", "stock091f", "stock091g", "stock091h", "stock091i", "stock091j", "stock091k", "stock092", "stock092a", "stock092b", "stock092c", "stock092d", "stock092e", "stock092f", "stock092g", "stock092h", "stock092i", "stock092j", "stock092k", "stock092l", "stock092m", "stock093", "stock093a", "stock093b", "stock093c", "stock093d", "stock093e", "stock094", "stock094a", "stock095", "stock095a", "stock096", "stock096a", "stock096b", "stock096c", "stock096d", "stock096e", "stock096f", "stock097", "stock097a", "stock097b", "stock097c", "stock097d", "stock097e", "stock097f", "stock097g", "stock097h", "stock097i", "stock098", "stock098a", "stock098b", "stock098c", "stock098d", "stock098e", "stock099", "stock099a", "stock099b", "stock099c", "stock099d", "stock099e", "stock099f", "stock100", "stock100a", "stock100b", "stock100c", "stock100d", "stock100e", "stock100f", "stock100g", "stock100h", "stock101", "stock101a", "stock101b", "stock102", "stock102a", "stock102b", "stock102c", "stock102d", "stock102e", "stock102f", "stock102g", "stock102h", "stock102i", "stock102j", "stock102k", "stock102l", "stock102m", "stock102n", "stock103", "stock103a", "stock103b", "stock103c", "stock103d", "stock103e", "stock103f", "stock104", "stock104a", "stock104b", "stock104c", "stock104d", "stock104e", "stock104f", "stock104g", "stock104h", "stock104i", "stock104j", "stock104k", "stock104l", "stock104m", "stock105", "stock105a", "stock105b", "stock105c", "stock105d", "stock105e", "stock105f", "stock105g", "stock105h", "stock105i", "stock105j", "stock105k", "stock105l", "stock105m", "stock105n", "stock105o", "stock105p", "stock105q", "stock105r", "stock105s", "stock105t", "stock105u", "stock105v", "stock105w", "stock105x", "stock105y", "stock105z", "stock105aa", "stock105ab", "stock105ac", "stock105ad", "stock105ae", "stock105af", "stock105ag", "stock105ah", "stock105ai", "stock105aj", "stock105ak", "stock105al", "stock105am", "stock105an", "stock105ao", "stock105ap", "stock105aq", "stock105ar", "stock105as", "stock105at", "stock105au", "stock105av", "stock105aw", "stock105ax", "stock105ay", "stock105az", "stock105ba", "stock105bb", "stock106", "stock106a", "stock106b", "stock106c", "stock106d", "stock106e", "stock106f", "stock106g", "stock106h", "stock106i", "stock106j", "stock106k", "stock106l", "stock106m", "stock106n", "stock106o", "stock106p", "stock106q", "stock106r", "stock106s", "stock106t", "stock106u", "stock106v", "stock106w", "stock106x", "stock106y", "stock106z", "stock106za", "stock106zb", "stock106zc", "stock107", "stock107a", "stock107b", "stock107c", "stock107d", "stock107e", "stock107f", "stock107g", "stock107h", "stock107i", "stock108", "stock108a", "stock108b", "stock108c", "stock108d", "stock108e", "stock108f", "stock108g", "stock108h", "stock108i", "stock108j", "stock108k", "stock108l", "stock108m", "stock108n", "stock108o", "stock108p", "stock108q", "stock108r", "stock108s", "stock108t", "stock108u"]
    },
    lunyu: {
        name: "文史哲学（《论语》详解）",
        articles: ["philosophy1"]
    },
    poetry: {
        name: "诗词曲赋",
        articles: []
    },
    economy: {
        name: "时政经济（缠中说禅经济学）",
        articles: []
    },
    essay: {
        name: "白话杂文",
        articles: []
    },
    science: {
        name: "数理科技（缠中说禅医学）",
        articles: []
    },
    music: {
        name: "音乐艺术",
        articles: []
    },
    entertainment: {
        name: "流行娱乐",
        articles: []
    },
    night: {
        name: "那一夜，他的体液喷了我一身",
        articles: []
    }
};

let currentCategory = "stock";

// ==================== 数据访问层（正文按需加载） ====================
// 元数据索引由 articles-index.js 提供：{ t:标题, d:日期, p:上一篇, n:下一篇, c:分块号 }
// 正文按分块存于 content/chunk-N.js，通过 window.ARTICLE_CONTENT[分块号][文章id] 读取
function getMeta(id) {
    const m = window.ARTICLE_INDEX && window.ARTICLE_INDEX[id];
    if (!m) return null;
    return { title: m.t, date: m.d, prev: m.p, next: m.n };
}

function getContent(id) {
    const m = window.ARTICLE_INDEX && window.ARTICLE_INDEX[id];
    if (!m) return undefined;
    const store = window.ARTICLE_CONTENT;
    if (!store || !store[m.c]) return undefined;
    return store[m.c][id];
}

const _chunkLoading = {};
function ensureChunk(chunkIdx) {
    if (_chunkLoading[chunkIdx]) return _chunkLoading[chunkIdx];
    _chunkLoading[chunkIdx] = new Promise(function(resolve, reject) {
        const s = document.createElement('script');
        s.src = 'content/chunk-' + chunkIdx + '.js';
        s.async = true;
        s.onload = function() { resolve(); };
        s.onerror = function() {
            delete _chunkLoading[chunkIdx];
            reject(new Error('正文分块 ' + chunkIdx + ' 加载失败'));
        };
        document.head.appendChild(s);
    });
    return _chunkLoading[chunkIdx];
}

function ensureAllChunks() {
    const set = {};
    const idx = window.ARTICLE_INDEX || {};
    for (const id in idx) set[idx[id].c] = true;
    return Promise.all(Object.keys(set).map(function(c) { return ensureChunk(c); }));
}

// ==================== 标签功能 ====================
let taggedArticles = new Set();

// 从localStorage加载标签数据
function loadTags() {
    try {
        const saved = localStorage.getItem('chanzhongshuochantags');
        if (saved) {
            const parsed = JSON.parse(saved);
            taggedArticles = new Set(parsed);
        }
    } catch (e) {
        console.error('加载标签数据失败:', e);
    }
}

// 保存标签数据到localStorage
function saveTags() {
    try {
        localStorage.setItem('chanzhongshuochantags', JSON.stringify(Array.from(taggedArticles)));
    } catch (e) {
        console.error('保存标签数据失败:', e);
    }
}

// 添加标签
function addTag(articleId) {
    taggedArticles.add(articleId);
    saveTags();
    renderArticleList();
}

// 删除标签
function removeTag(articleId) {
    taggedArticles.delete(articleId);
    saveTags();
    renderArticleList();
}

// 切换标签状态
function toggleTag(articleId) {
    if (taggedArticles.has(articleId)) {
        removeTag(articleId);
    } else {
        addTag(articleId);
    }
}

// 检查文章是否有标签
function hasTag(articleId) {
    return taggedArticles.has(articleId);
}

// 右键菜单相关
let contextMenuTargetArticle = null;
const contextMenu = document.getElementById('context-menu');

function showContextMenu(x, y, articleId) {
    contextMenuTargetArticle = articleId;
    
    // 根据是否有标签调整菜单
    const addFlagItem = document.getElementById('add-flag');
    const removeFlagItem = document.getElementById('remove-flag');
    
    if (hasTag(articleId)) {
        addFlagItem.style.display = 'none';
        removeFlagItem.style.display = 'flex';
    } else {
        addFlagItem.style.display = 'flex';
        removeFlagItem.style.display = 'none';
    }
    
    // 定位菜单
    contextMenu.style.left = x + 'px';
    contextMenu.style.top = y + 'px';
    contextMenu.classList.add('show');
    
    // 确保菜单不超出窗口
    const rect = contextMenu.getBoundingClientRect();
    if (rect.right > window.innerWidth) {
        contextMenu.style.left = (window.innerWidth - rect.width - 10) + 'px';
    }
    if (rect.bottom > window.innerHeight) {
        contextMenu.style.top = (window.innerHeight - rect.height - 10) + 'px';
    }
}

function hideContextMenu() {
    contextMenu.classList.remove('show');
    contextMenuTargetArticle = null;
}

// 初始化标签功能
function initTagFeatures() {
    loadTags();
    
    // 右键菜单事件
    document.addEventListener('contextmenu', function(e) {
        const articleItem = e.target.closest('.article-item');
        if (articleItem) {
            e.preventDefault();
            const articleId = articleItem.dataset.article;
            showContextMenu(e.clientX, e.clientY, articleId);
        }
    });
    
    // 点击其他地方关闭菜单
    document.addEventListener('click', function(e) {
        if (!contextMenu.contains(e.target)) {
            hideContextMenu();
        }
    });
    
    // ESC键关闭菜单
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            hideContextMenu();
        }
    });
    
    // 添加标签菜单
    document.getElementById('add-flag').addEventListener('click', function() {
        if (contextMenuTargetArticle) {
            addTag(contextMenuTargetArticle);
            hideContextMenu();
        }
    });
    
    // 删除标签菜单
    document.getElementById('remove-flag').addEventListener('click', function() {
        if (contextMenuTargetArticle) {
            removeTag(contextMenuTargetArticle);
            hideContextMenu();
        }
    });
    
    // 查看所有标签文章菜单
    document.getElementById('view-flags').addEventListener('click', function() {
        hideContextMenu();
        showAllTaggedArticles();
    });
    
    // 标签链接点击事件
    const taggedLink = document.getElementById('taggedArticlesLink');
    if (taggedLink) {
        taggedLink.addEventListener('click', function(e) {
            e.preventDefault();
            switchCategory('chan');
        });
    }
}

// 显示所有标签文章
function showAllTaggedArticles() {
    if (taggedArticles.size === 0) {
        alert('目前没有标记任何文章');
        return;
    }
    
    let message = '已标记的文章：\n\n';
    let count = 1;
    for (const id of taggedArticles) {
        const article = getMeta(id);
        if (article) {
            message += `${count}. ${article.title}\n`;
            count++;
        }
    }
    
    alert(message);
}

// 显示已标记文章的特殊视图（全局函数）
function showTaggedArticlesView() {
    // 更新分类名称显示
    document.getElementById('category-name').textContent = '已标记的文章';
    
    // 更新当前分类
    currentCategory = 'tagged';
    
    // 更新分类菜单的激活状态
    document.querySelectorAll('.category-item').forEach(item => {
        item.classList.remove('active');
    });
    
    // 渲染已标记的文章列表
    const articleList = document.querySelector('.article-list');
    articleList.innerHTML = '';
    
    if (taggedArticles.size === 0) {
        articleList.innerHTML = '<p style="padding: 20px; color: #888; text-align: center;">暂无标记的文章，请先右键文章标题添加标签</p>';
        document.getElementById('article-title').textContent = '已标记的文章';
        document.getElementById('article-body').innerHTML = '<p style="text-align: center; color: #888;">暂无标记的文章，请先右键文章标题添加标签</p>';
        return;
    }
    
    // 创建文章列表
    let count = 1;
    for (const id of taggedArticles) {
        const article = getMeta(id);
        if (!article) continue;
        
        const link = document.createElement('a');
        link.href = '#';
        link.className = 'article-item';
        link.dataset.article = id;
        
        const isMainArticle = /^stock(?!000$)\d{3}$/.test(id);
        
        // 检查是否有标签
        const hasFlag = hasTag(id);
        if (hasFlag) {
            link.classList.add('has-flag');
            const flagSpan = document.createElement('span');
            flagSpan.className = 'flag-icon';
            flagSpan.textContent = '🚩';
            flagSpan.addEventListener('click', function(e) {
                e.stopPropagation();
                e.preventDefault();
                toggleTag(id);
                showTaggedArticlesView();
            });
            link.appendChild(flagSpan);
        }
        
        link.innerHTML = '<div class="article-number">' + count + '</div><div class="article-info"><div class="article-title">' + article.title + '</div><div class="article-date">' + (article.date || '') + '</div></div>';
        
        if (isMainArticle) {
            link.classList.add('main-article');
        }
        
        if (id === currentArticle) {
            link.classList.add('active');
        }
        
        link.addEventListener('click', function(e) {
            e.preventDefault();
            loadArticle(id);
            updateArticleListActive(id);
        });
        
        articleList.appendChild(link);
        count++;
    }
    
    // 加载第一篇标记的文章
    const firstTaggedArticle = Array.from(taggedArticles)[0];
    if (firstTaggedArticle) {
        loadArticle(firstTaggedArticle);
    }
}

// 切换分类
function switchCategory(categoryId) {
    const category = categories[categoryId];
    if (!category) return;
    
    currentCategory = categoryId;
    
    // 更新分类名称显示
    document.getElementById('category-name').textContent = category.name;
    
    // 更新分类菜单的激活状态
    document.querySelectorAll('.category-item').forEach(item => {
        item.classList.remove('active');
        if (item.dataset.category === categoryId) {
            item.classList.add('active');
        }
    });
    
    // 重新渲染侧边栏文章列表
    renderArticleList();
    
    // 如果该分类有文章，加载第一篇
    if (category.articles.length > 0) {
        loadArticle(category.articles[0]);
    }
}

// 渲染侧边栏文章列表
function renderArticleList() {
    const articleList = document.querySelector('.article-list');
    const category = categories[currentCategory];

    articleList.innerHTML = '';

    if (category.articles.length === 0) {
        articleList.innerHTML = '<p style="padding: 20px; color: #888;">该分类暂无文章</p>';
        return;
    }

    category.articles.forEach(articleId => {
        const article = getMeta(articleId);
        if (!article) return;

        const link = document.createElement('a');
        link.href = '?' + currentCategory + '=' + articleId;
        link.className = 'article-item';
        if (articleId === currentArticle) {
            link.classList.add('active');
        }
        link.dataset.article = articleId;

        const isMainArticle = /^stock(?!000$)\d{3}$/.test(articleId);
        
        // 检查是否有标签
        const hasFlag = hasTag(articleId);
        
        // 如果有标签，添加类和图标
        if (hasFlag) {
            link.classList.add('has-flag');
            const flagSpan = document.createElement('span');
            flagSpan.className = 'flag-icon';
            flagSpan.textContent = '🚩';
            flagSpan.addEventListener('click', function(e) {
                e.stopPropagation();
                e.preventDefault();
                toggleTag(articleId);
            });
            link.appendChild(flagSpan);
        }
        
        // 添加标题
        if (isMainArticle) {
            const titleSpan = document.createElement('span');
            titleSpan.innerHTML = '<strong>' + article.title + '</strong>';
            link.appendChild(titleSpan);
        } else {
            const titleSpan = document.createElement('span');
            titleSpan.textContent = article.title;
            link.appendChild(titleSpan);
        }

        link.addEventListener('click', function(e) {
            e.preventDefault();
            loadArticle(articleId);
        });

        articleList.appendChild(link);
    });
}


let currentArticle = 'xu';

function getArticleUrl(articleId, categoryId) {
    return '#' + categoryId + '/' + articleId;
}

function parseHash() {
    const params = new URLSearchParams(window.location.search);
    
    if (params.has('chan')) {
        return { category: 'chan', article: params.get('chan') || 'xu' };
    } else if (params.has('stock')) {
        return { category: 'stock', article: params.get('stock') || 'stock001' };
    } else if (params.has('lunyu')) {
        return { category: 'lunyu', article: params.get('lunyu') || 'philosophy1' };
    }
    
    return { category: 'chan', article: 'xu' };
}

let _loadToken = 0;

async function loadArticle(articleId, updateHash = true) {
    const article = getMeta(articleId);
    if (!article) return;

    const token = ++_loadToken;
    const titleEl = document.getElementById('article-title');
    const dateEl = document.querySelector('.article-meta');
    const bodyEl = document.getElementById('article-body');

    titleEl.textContent = article.title;
    dateEl.textContent = article.date;

    currentArticle = articleId;

    if (updateHash) {
        const newUrl = window.location.pathname + '?' + currentCategory + '=' + articleId;
        history.pushState({article: articleId, category: currentCategory}, '', newUrl);
    }

    document.querySelectorAll('.article-item').forEach(item => {
        item.classList.remove('active');
        if (item.dataset.article === articleId) {
            item.classList.add('active');
        }
    });

    updatePagination();

    window.scrollTo(0, 0);

    // 正文按需加载：已缓存的直接显示，否则加载所属分块
    const cached = getContent(articleId);
    if (cached !== undefined) {
        bodyEl.innerHTML = cached;
        return;
    }

    bodyEl.innerHTML = '<p style="color:#888;">正在加载正文…</p>';
    try {
        await ensureChunk(window.ARTICLE_INDEX[articleId].c);
        if (token !== _loadToken) return;
        bodyEl.innerHTML = getContent(articleId) || '<p style="color:#888;">正文加载失败</p>';
    } catch (err) {
        if (token !== _loadToken) return;
        bodyEl.innerHTML = '<p style="color:#888;">正文加载失败，请检查网络后重试</p>';
    }
}

function updatePagination() {
    const article = getMeta(currentArticle);
    const prevEl = document.querySelector('.pagination-item.prev');
    const nextEl = document.querySelector('.pagination-item.next');

    if (article && article.prev && getMeta(article.prev)) {
        prevEl.style.display = 'flex';
        prevEl.querySelector('.pagination-title').textContent = getMeta(article.prev).title;
    } else {
        prevEl.style.display = 'none';
    }

    if (article && article.next && getMeta(article.next)) {
        nextEl.style.display = 'flex';
        nextEl.querySelector('.pagination-title').textContent = getMeta(article.next).title;
    } else {
        nextEl.style.display = 'none';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    // 初始化渲染文章列表
    renderArticleList();
    
    // 加载默认文章
    loadArticle('stock001');

    // 监听浏览器前进后退
    window.addEventListener('popstate', function(e) {
        if (e.state && e.state.article) {
            if (categories[e.state.category]) {
                currentCategory = e.state.category;
                switchCategory(e.state.category);
            }
            if (getMeta(e.state.article)) {
                loadArticle(e.state.article, false);
            }
        }
    });

    const categoryItems = document.querySelectorAll('.category-item');
    
    categoryItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const categoryId = this.dataset.category;
            if (categoryId) {
                switchCategory(categoryId);
            }
        });
    });

    const bottomLinks = document.querySelectorAll('.bottom-link');
    
    bottomLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            bottomLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });

    const prevLink = document.querySelector('.pagination-item.prev');
    const nextLink = document.querySelector('.pagination-item.next');

    if (prevLink) {
        prevLink.addEventListener('click', function(e) {
            e.preventDefault();
            const article = getMeta(currentArticle);
            if (article && article.prev) {
                loadArticle(article.prev);
            }
        });
    }

    if (nextLink) {
        nextLink.addEventListener('click', function(e) {
            e.preventDefault();
            const article = getMeta(currentArticle);
            if (article && article.next) {
                loadArticle(article.next);
            }
        });
    }

    // 搜索功能
    const searchToggle = document.getElementById('searchToggle');
    const searchContainer = document.getElementById('searchContainer');
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');

    if (searchToggle) {
        searchToggle.addEventListener('click', function() {
            if (searchContainer.style.display === 'none') {
                searchContainer.style.display = 'block';
                searchInput.focus();
            } else {
                searchContainer.style.display = 'none';
                searchInput.value = '';
                searchResults.innerHTML = '';
            }
        });
    }

    // 点击外部关闭搜索框
    document.addEventListener('click', function(e) {
        if (!searchContainer.contains(e.target) && !searchToggle.contains(e.target)) {
            searchContainer.style.display = 'none';
            searchInput.value = '';
            searchResults.innerHTML = '';
        }
    });

    // 搜索函数
    let _searchSeq = 0;

    async function performSearch(query) {
        query = query.trim().toLowerCase();
        
        if (!query) {
            searchResults.innerHTML = '';
            return;
        }

        const seq = ++_searchSeq;

        // 正文按需加载：首次搜索时才拉取全文分块
        if (!window.__contentReady) {
            searchResults.innerHTML = '<div class="search-stats">正在加载全文索引…</div>';
            try {
                await ensureAllChunks();
                window.__contentReady = true;
            } catch (err) {
                if (seq === _searchSeq) {
                    searchResults.innerHTML = '<div class="search-no-results">全文索引加载失败，请检查网络后重试</div>';
                }
                return;
            }
            if (seq !== _searchSeq) return;
        }

        const results = [];
        
        // 遍历所有文章进行搜索
        for (const [id, meta] of Object.entries(window.ARTICLE_INDEX)) {
            // 搜索标题
            const titleMatch = meta.t.toLowerCase().includes(query);
            
            // 搜索内容（去掉HTML标签）
            const contentText = (getContent(id) || '').replace(/<[^>]*>/g, '').toLowerCase();
            const contentMatch = contentText.includes(query);
            
            if (titleMatch || contentMatch) {
                // 获取匹配的内容片段
                let preview = '';
                if (contentMatch) {
                    const index = contentText.indexOf(query);
                    const start = Math.max(0, index - 30);
                    const end = Math.min(contentText.length, index + query.length + 50);
                    preview = (start > 0 ? '...' : '') + 
                             contentText.slice(start, end) + 
                             (end < contentText.length ? '...' : '');
                } else if (titleMatch) {
                    // 如果只有标题匹配，显示内容的前100个字符
                    preview = contentText.slice(0, 100) + (contentText.length > 100 ? '...' : '');
                }
                
                results.push({
                    id: id,
                    title: meta.t,
                    date: meta.d,
                    preview: preview,
                    matchType: titleMatch ? 'title' : 'content'
                });
            }
        }

        if (seq !== _searchSeq) return;

        // 显示搜索结果
        displaySearchResults(results, query);
    }

    // 显示搜索结果
    function displaySearchResults(results, query) {
        if (results.length === 0) {
            searchResults.innerHTML = '<div class="search-no-results">未找到匹配的文章</div>';
            return;
        }

        const stats = `<div class="search-stats">找到 ${results.length} 个结果</div>`;
        
        const resultsHTML = results.slice(0, 20).map(result => {
            // 高亮搜索词
            const highlightedTitle = highlightText(result.title, query);
            const highlightedPreview = highlightText(result.preview, query);
            
            return `
                <div class="search-result-item" data-id="${result.id}">
                    <div class="search-result-title">${highlightedTitle}</div>
                    <div class="search-result-date">${result.date}</div>
                    ${result.matchType === 'content' ? `<div class="search-result-preview">${highlightedPreview}</div>` : ''}
                </div>
            `;
        }).join('');

        searchResults.innerHTML = stats + resultsHTML;

        // 添加点击事件
        const resultItems = searchResults.querySelectorAll('.search-result-item');
        resultItems.forEach(item => {
            item.addEventListener('click', function() {
                const articleId = this.dataset.id;
                // 切换到该文章所在的分类
                if (articleId.startsWith('stock')) {
                    switchCategory('stock');
                } else if (articleId.startsWith('lunyu') || articleId.startsWith('philosophy')) {
                    switchCategory('lunyu');
                } else if (articleId.startsWith('chan') || articleId.startsWith('xu')) {
                    switchCategory('chan');
                }
                
                // 加载文章
                loadArticle(articleId);
                
                // 关闭搜索框
                searchContainer.style.display = 'none';
                searchInput.value = '';
                searchResults.innerHTML = '';
            });
        });
    }

    // 高亮文本
    function highlightText(text, query) {
        if (!query) return text;
        const regex = new RegExp(`(${query})`, 'gi');
        return text.replace(regex, '<span class="search-highlight">$1</span>');
    }

    // 防抖函数
    let searchTimeout;
    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            clearTimeout(searchTimeout);
            searchTimeout = setTimeout(() => {
                performSearch(e.target.value);
            }, 300);
        });
    }
    
    // 初始化标签功能
    initTagFeatures();
    
});
