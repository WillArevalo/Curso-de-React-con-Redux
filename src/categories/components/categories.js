import React from 'react';
import Category from './category.js';
import './categories.css';
import Search from '../../widgets/containers/search.js';
//Reutilizo media para mostrar los resultados del search
import Media from '../../playlist/components/media';

function Categories(props){
	return (
		<div className="Categories">
			<Search />
			{
				props.search.map((item) => {
					return <Media {...item.toJS()} key={item.get('id')} />
				})
			}
			{
				props.categories.map((item) => {
					return (
						<Category 
							key={item.get('id')} 
							{...item.toJS()} 
							handleOpenModal = {props.handleOpenModal}
						/>
					)
				} )
			}
		</div>
	)
}

export default Categories;