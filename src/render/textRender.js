/**
 *
 *      # h1
 *      ## h2
 *      ### h3
 *      #### h4
 *      ##### h5
 *      ###### h6
 *
 * @param node
 * @returns {{data}}
 */
module.exports = function render(node) {
    return {
        data: node.data,
    }
}

