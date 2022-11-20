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
                typeName: 'Careers',
                path: './content/page/**/careers/**/*.md',
            }
        },
        {
            use: '@gridsome/source-filesystem',
            options: {
                typeName: 'Blog',
                path: './content/page/cs-academy/**/*.md',
                templates: {
                    BlogPost: '/cs-academy/post/:id'
                },
                refs: {
                    category: {
                        typeName: 'BlogCategory',
                        create: true
                    }
                }
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
                    opening: 'Opening',
                    careers: "Careers"
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
    templates: {
        BlogCategory: [{
            path: '/cs-academy/category/:id',
            component: '~/templates/Category.vue'
        }],
        Blog: [{
            path: '/cs-academy/post/:id',
            component: '~/templates/BlogPost.vue'
        }],
        Careers: [{
            path: '/careers/:id',
            component: '~/templates/Career.vue'
        }],
    },
    transformers: {
        //Add markdown support to all file-system sources
        remark: {
            externalLinksTarget: '_blank',
            externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
            anchorClassName: 'icon icon-link',
            plugins: [
                ['gridsome-plugin-remark-prismjs-all', {
                    highlightClassName: "gridsome-highlight",
                    codeTitleClassName: "gridsome-code-title",
                    classPrefix: 'language-',
                    aliases: {},
                    noInlineHighlight: false,
                    showLineNumbers: false, //  `require("prismjs/plugins/line-numbers/prism-line-numbers.css");`
                    languageExtensions: [],
                    prompt: { //  `require("prismjs/plugins/command-line/prism-command-line.css");`
                        user: `root`,
                        host: `localhost`,
                        global: false,
                    }
                }]
            ]
        }
    }
}