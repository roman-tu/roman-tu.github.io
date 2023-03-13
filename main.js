let summelem = document.getElementById('sum')
var app = new Vue({
	el: '#app',
	data: {
		component: [
			
			],
		idd: 0,
		nameprod: 'Хлеб',
		datetake: '03.03.23',
		counts: '0',
		price: '0',
		TotalSumm: 0
	},
	emits: ['update:value'],
	methods: {
		parseData: function () {
			let jsonn = {id: this.component.length, nameProduct: this.nameprod, dateTake: this.datetake, counts: this.counts, price: this.price, totalsum: Number(this.price*this.counts) ,}
			this.component.push(jsonn)
			let ts
			for(let i = 0; this.component.length > i; i++){
				ts = Number(this.component[i].totalsum)
			}
			this.TotalSumm += ts
		}
	  }
})