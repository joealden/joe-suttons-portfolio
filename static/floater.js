document.addEventListener('DOMContentLoaded', function() {
  // Elements
  var floater = document.querySelector('.floater')

  if (floater !== null) {
    var wrapper = floater.querySelector('.wrap')
    var wrapperHeight = wrapper.offsetHeight
    var inner = floater.querySelector('.inner')

    // Add keyframe animation to <head>
    var css = document.createTextNode(
      '@keyframes slide { 0% {transform:translate(0)} 100% {transform:translate(0, -' +
        wrapperHeight +
        'px);} }'
    )
    var style = document.createElement('style')
    style.type = 'text/css'
    style.appendChild(css)
    document.head.appendChild(style)

    // Start animating
    inner.classList.add('slide')
  }
})
