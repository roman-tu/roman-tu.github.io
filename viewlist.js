Vue.component('viewlist', {
	template: '<div><div class="container-sm d-flex flex-row justify-content-evenly"><div class="bl-30p"><h4 class="mrr-10">№</h4></div><div class="bl-30p"><h4 class="mrr-10">Название товара</h4></div><div class="bl-30p"><h4 class="mrr-10">Дата приема товара</h4></div><div class="bl-30p"><h4 class="mrr-10">Количество</h4></div><div class="bl-30p"><h4 class="mrr-10">Цена за единицу товара </h4> </div></div><div class="container-sm d-flex flex-column mb-3"><div class="container-sm d-flex flex-row justify-content-evenly" v-for="item in prop"><div class="bl-30p"><h3 class="mrr-10">{{item.id}}</h3></div><div class="bl-30p"><h3 class="mrr-10">{{item.nameProduct}}</h3></div><div class="bl-30p"><h3 class="mrr-10">{{item.dateTake}}</h3></div><div class="bl-30p"><h3 class="mrr-10">{{item.counts}}</h3></div><div class="bl-30p"><h3 class="mrr-10">{{item.price}}</h3></div></div></div></div>',
	props:['prop', 'idx'],
	date:{

	},
	methods:{

	}
})