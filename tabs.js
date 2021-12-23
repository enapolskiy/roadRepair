document.addEventListener("DOMContentLoaded", function() {
    //  console.log('tab')
    //    console.log(document.querySelectorAll('.tabs-btn'))
 document.querySelectorAll('.tabs-btn').forEach(function(tabsBtn) {
    // console.log(tabsBtn)
    tabsBtn.addEventListener('click', function(event) {
        const path = event.currentTarget.dataset.path
        console.log (path)

        document.querySelectorAll('.tab-content').forEach(function(tabContent) {
            tabContent.classList.remove('tab-content-active')
        })
         document.querySelector(`[data-target="${path}"]`).classList.add('tab-content-active')
    })

})
})