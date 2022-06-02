export class GoodsServices {
	constructor(resource){
		this.resource = resource
	}

	async getGoods(params) {
		const response = await fetch(`${this.resource}/${params}`);
		const result = await response.json();
		return result
	}
}
