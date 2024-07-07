quotes_block = document.getElementsByClassName('wrap-block')
quotes_block = Array.from(quotes_block)
quotes = ""
quotes_block.forEach(function(item){
    quotes += item.children[0].textContent.trim('\n') +' - '+ item.children[1].textContent.trim('\n') + '\n'
})
console.log(quotes)
