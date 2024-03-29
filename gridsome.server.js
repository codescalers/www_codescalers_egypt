// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

var private = process.env.SHOWPRIVATE
if (private == "true")
  private = null
else if (private == "false")
  private = 1

module.exports = function (api) {
  api.loadSource(({ addCollection }) => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
  })

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
  })

  api.createPages(async ({
    graphql,
    createPage
  }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api
    const {
      data
    } = await graphql(`{
  allBlog {
    edges {
      previous {
        id
      }
      next {
        id
      }
      node {
        id
        path
      }
    }
  }
}
`);

    data.allBlog.edges.forEach(function (element) {
      createPage({
        path: element.node.path,
        component: './src/templates/BlogPost.vue',
        context: {
          previousElement: (element.previous) ? element.previous.id : '##empty##',
          nextElement: (element.next) ? element.next.id : '##empty##',
          id: element.node.id
        }
      });

    });

  });

  api.createPages(async ({ graphql, createPage }) => {
    const { data } = await graphql(`{
    allBlogCategory {
      edges {
        node {
          id
          path
        }
      }
    }
  }`)

    data.allBlogCategory.edges.forEach(({ node }) => {
      createPage({
        path: `${node.path}`,
        component: './src/templates/Category.vue',
        context: {
          id: node.id,
          private: private
        }
      })
    })
  });

  api.createPages(({ createPage }) => {
    createPage({
      path: '/search',
      component: './src/templates/Search.vue',
      context: {
        private: private
      }
    })
  });

  api.createPages(async ({
    graphql,
    createPage
  }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api
    const {
      data
    } = await graphql(`{
  allCareers {
    edges {
      previous {
        id
      }
      next {
        id
      }
      node {
        id
        path
      }
    }
  }
}
`);

    data.allCareers.edges.forEach(function (element) {
      createPage({
        path: element.node.path,
        component: './src/templates/Career.vue',
        context: {
          previousElement: (element.previous) ? element.previous.id : '##empty##',
          nextElement: (element.next) ? element.next.id : '##empty##',
          id: element.node.id
        }
      });

    });

  });
}
