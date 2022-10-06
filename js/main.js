

var article_1 = {
	'foto': 'https://itproger.com/img/news/1517501131.jpg',
	'title': 'Устаревшие языки, которые уже не стоит изучать',
	'intro': 'Есть много ЯП, которые уже отжили свое, но их все равно продолжают изучать. В этой статье мы расскажем про 5 языков, которые уже точно не стоит изучать, хотя многие до сих пор делают это.'
};



var article_2 = {
	'foto': 'https://itproger.com/img/news/1516366532.jpg',
	'title': '10 самых популярных сайтов написанных на Django',
	'intro': 'Django набирает популярность и многие крупные компании используют его для создания веб проектов. Мы подобрали 10 популярных сайтов, написанных на Django.'
};

var article_3 = {
	'foto': 'https://itproger.com/img/news/1517501131.jpg',
	'title': 'Устаревшие языки, которые уже не стоит изучать',
	'intro': 'Есть много ЯП, которые уже отжили свое, но их все равно продолжают изучать. В этой статье мы расскажем про 5 языков, которые уже точно не стоит изучать, хотя многие до сих пор делают это.'
};


var article_4 = {
	'foto': 'https://itproger.com/img/news/1516366532.jpg',
	'title': '10 самых популярных сайтов написанных на Django',
	'intro': 'Django набирает популярность и многие крупные компании используют его для создания веб проектов. Мы подобрали 10 популярных сайтов, написанных на Django.'
};


var article_5 = {
	'foto': 'https://itproger.com/img/news/1517501131.jpg',
	'title': 'Устаревшие языки, которые уже не стоит изучать',
	'intro': 'Есть много ЯП, которые уже отжили свое, но их все равно продолжают изучать. В этой статье мы расскажем про 5 языков, которые уже точно не стоит изучать, хотя многие до сих пор делают это.'
};
 

var article_6 = {
	'foto': 'https://itproger.com/img/news/1516366532.jpg',
	'title': '10 самых популярных сайтов написанных на Django',
	'intro': 'Django набирает популярность и многие крупные компании используют его для создания веб проектов. Мы подобрали 10 популярных сайтов, написанных на Django.'
};


var article_7 = {
	'foto': 'https://itproger.com/img/news/1517501131.jpg',
	'title': 'Устаревшие языки, которые уже не стоит изучать',
	'intro': 'Есть много ЯП, которые уже отжили свое, но их все равно продолжают изучать. В этой статье мы расскажем про 5 языков, которые уже точно не стоит изучать, хотя многие до сих пор делают это.'
};


var article_8 = {
	'foto': 'https://itproger.com/img/news/1516366532.jpg',
	'title': '10 самых популярных сайтов написанных на Django',
	'intro': 'Django набирает популярность и многие крупные компании используют его для создания веб проектов. Мы подобрали 10 популярных сайтов, написанных на Django.'
};
var articles = [article_1, article_2, article_3, article_4, article_5, article_6, article_7, article_8];


/* var start = 0;

$("#loadMore").on("click", function () {
	var htmlToInsert = '';
	
	for(var i = start; i < articles.length; i++) {
		if(i > 3 + start)
			break;
		htmlToInsert += "<div class='card'><img src='" + articles[i].foto + "' class='card-img-top' alt='" + articles[i].title + "'><div class='card-body'><h5 class='card-title'>" + articles[i].title + "</h5><p class='card-text'>" + articles[i].intro + "</p><a href='#' class='btn btn-warning'>Читать далее</a></div></div>";
		
		
		if(i == articles.length - 1) {
			$("#loadMore").hide();
			break;
		}
	}
	
	$("#loadMoreBlock").append(htmlToInsert);
	
	start += 4; 
}); */
Vue.createApp({
	template: `
	<div class="card" v-for="(item, index) in currList" :key="index">
	<img :src='item.foto' class='card-img-top'>
	  <div class="card-body">
		<h5 class="card-title">{{ item.title }}</h5>
		  <p class="card-text">{{ item.intro }}</p>
		  <a href="#" class="btn btn-warning">Читать далее</a>
	  </div>
	  </div>
	  <button @click="fetchItems" :hidden="!apiList.length" class='btn btn-warning text'>Читать далее</button>
	`,
	data: () => ({
	  currList: [],
	  apiList: articles,
	}),
	methods: {
	  fetchItems: function () {
		try {
		  this.apiList = this.apiList.filter((item, index) => {
			if (index > 3) return item
			this.currList.push(item)
		  })
		} catch (error) {
		  console.error(error);
		}
	  }
	},
	mounted: function () {
	  try {
		/* this.fetchItems() */
	  } catch (error) {
		console.error(error);
	  }
	}
  }).mount('#app');

function openSearch() {
	document.getElementById("myOverlay").style.display = "flex";
	document.getElementById("myOverlay").style.justifyContent = "center";
  }
  

  function closeSearch() {
	document.getElementById("myOverlay").style.display = "none";
  }