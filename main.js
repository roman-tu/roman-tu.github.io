var app = new Vue({
	el: '#app',
	data: {
		component: [
			
			],
		idd: 0,
		nameprod: 'Хлеб',
		datetake: '03.03.23',
		counts: '20',
		price: '12'
	},
	emits: ['update:value'],
	methods: {
		parseData: function () {
			let jsonn = {id: this.component.length, nameProduct: this.nameprod, dateTake: this.datetake, counts: this.counts, price: this.price}
			this.component.push(jsonn)
		}
	  }
})