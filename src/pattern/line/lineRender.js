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
 * @returns {boolean}
 */


module.exports = function render(node) {
    let n = node.map["num"];
    const head = "<h" + n + '>';
    const end = "</h" + n + '>';
    if (node.NodeList.length > 0) {
        return {
            head: head,
            data: "",
            end: end
        }
    }

    return {
        head: head,
        data: node.data,
        end: end
    }
}

