module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy('static');

    return {
        dir: {
            layouts: 'templates',
            markdown: 'content'
        },

        dataTemplateEngine: 'njk',
        markdownTemplateEngine: 'njk',
        htmlTemplateEngine: 'njk',
        templateFormats: [
            'md', 'njk'
        ]
    };
};