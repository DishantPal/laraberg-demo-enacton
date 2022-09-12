import './bootstrap';
import registerLarabergBlocks from './register-blocks'

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

// registerLarabergBlocks
registerLarabergBlocks()

// Initializing Laraberg
Laraberg.init('post_content', {})
