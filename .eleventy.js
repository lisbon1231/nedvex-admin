module.exports = function (eleventyConfig) {
    return {
        dir: {
            layouts: "templates",
            markdown: "content"
        },

        dataTemplateEngine: 'njk',
        markdownTemplateEngine: 'njk',
        htmlTemplateEngine: 'njk',
        templateFormats: [
            'md', 'njk'
        ],
    };
};