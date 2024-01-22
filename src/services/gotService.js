import httpClient from "./httpClient";

export default class GotService {
	async getResourse(url, config){
		const res =  await httpClient.get(url, config);
		if(res.status > 200){
			throw new Error(res.response ?? res.request ?? 'Error', res.message)
		}else{
			return res.data;
		}
	}

	async getAllCharacters(){
		const res = await this.getResourse('/characters?page=5');
		return res.map(this._transformCharacter);
	}
	async getCharacter(id){
		const res = await this.getResourse(`/characters/${id}`)
		return this._transformCharacter(res);
	}

	async getAllHouses (){
		const res = await this.getResourse('/houses?page=1');
		return res.map(this._transformHouse);
	}
	async getHouse(id){
		const res = await this.getResourse(`/houses/${id}`);
		return this._transformHouse(res);
	}

	async getAllBooks (){
		const res = await this.getResourse('/books?page=1');
		return res.map(this._transformBook);
	}
	async getBook(id){
		const res = await this.getResourse(`/books/${id}`);
		return this._transformBook(res);
	}

	_transformCharacter (character){
		return{
			id : +character.url.match('\\d{1,}')[0] ?? null,
			name : character.name,
			gender : character.gender,
			born : character.born,
			died : character.died,
			culture : character.culture
		}
	}

	_transformHouse (house){
		return{
			id : +house.url.match('\\d{1,}')[0] ?? null,
			name : house.name,
			region : house.region,
			words : house.words,
			titles : house.titles,
			overlord : house.overlord,
			ansestralWearpons : house.ansestralWearpons
		}
	}
	_transformBook (book){
		return{
			id : +book.url.match('\\d{1,}')[0] ?? null,
			name : book.name,
			numberOfPages : book.numberOfPages,
			publisher : book.publisher,
			released : book.publisher,
		}
	}
}