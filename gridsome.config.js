const tailwind = require('tailwindcss')

const postcssPlugins = [
    tailwind(),
]

module.exports = {
    siteName: 'CodeScalers-Egypt',
    plugins: [
        {
            use: '@gridsome/source-filesystem',
            options: {
                typeName: 'Navigation',
                path: './content/navigation/navigation.md',
            }
        },
        {
            use: '@gridsome/source-filesystem',
            options: {
                typeName: 'Carousel',
                path: './content/page/**/carousel/**/*.md',
            }
        },
        {
            use: '@gridsome/source-filesystem',
            options: {
                typeName: 'Description',
                path: './content/page/**/description/**/*.md',
            }
        },
        {
            use: '@gridsome/source-filesystem',
            options: {
                typeName: 'Opening',
                path: './content/page/**/opening/*.md',
            }
        },
        {
            use: '@gridsome/source-filesystem',
            options: {
                typeName: 'MarkdownPage',
                path: './content/page/*/*.md',
                refs: {
                    carousel: 'Carousel',
                    description: 'Description',
                    opening: 'Opening'
                }
            }
        },
    ],
    css: {
        loaderOptions: {
            postcss: {
                plugins: postcssPlugins,
            },
        },
    },
    chainWebpack: config => {
        config.resolve.alias.set('@images', '@/assets/images')
    },
}