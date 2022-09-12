import './bootstrap';

import exampleBlock from './blocks/example-block'
import infoBox from './blocks/info-box'

const { dispatch, select } = Laraberg.wordpress.data

// Custom Category
export function registerCategory(title, slug) {
    let category = {
        slug: slug,
        title: title
    }

    const currentCategories = select('core/blocks').getCategories().filter(item => item.slug !== category.slug)
    dispatch('core/blocks').setCategories([category, ...currentCategories])
}

registerCategory('Test', 'test')

// Registering Blocks
exampleBlock()
infoBox()

// Media Upload Function
const mediaUpload = ({filesList, onFileChange}) => {
    setTimeout(() => {
        const uploadedFiles = Array.from(filesList).map(file => {
            return {
                id: file.name,
                name: file.name,
                url: `https://dummyimage.com/600x400/000/fff&text=${file.name}`
            }
        })
        onFileChange(uploadedFiles)
    }, 1000)
}

// Initializing Laraberg
Laraberg.init('post_content', { mediaUpload })
