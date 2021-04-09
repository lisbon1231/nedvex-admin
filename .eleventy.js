module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy('static');

    eleventyConfig.addFilter("sortByPriority", arr => {
        arr.sort((a, b) => {
            let prior1 = a.data.priority
            let prior2 = b.data.priority
            
            if(prior1 == undefined) {
                prior1 = 100
            }

            if(prior2 == undefined) {
                prior2 = 100
            }
            return prior1 > prior2 ? 1 : -1
        });
        return arr;
      });

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