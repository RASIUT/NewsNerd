import React, { Component } from 'react'

export class NewsItem extends Component {
	render() {
		let { title, description, imageUrl, newsUrl} = this.props;
		return (
			<div>
				<div className="card" style={{ width: "18rem" }}>
					<img src={imageUrl} className="card-img-top" alt='...' />
					<div className="card-body">
						<h5 className="card-title">{title.length > 45 ? title.slice(0, 45) + "..." : title}</h5>
						<p className="card-text">{description!=null ? description.length>100 ? description.slice(0, 100) + "..." : description : ""}</p>
						<a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">Read More</a>
					</div>
				</div>

			</div>
		)
	}
}

export default NewsItem