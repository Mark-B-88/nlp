const changeUI = (el, content) => {
    if(content.confidence === undefined) {
        el.innerHTML = `Can not analyze this text!
        <br>
        <small>Error code : ${content.status.code}:</small> 
        <br>
        <small>Error message : "${content.status.msg}"</small>
        `
    }
    else {
        el.innerHTML = `
        <div style="display:flex;flex-direction:column;justify-content:center;align-items:center;padding:1rem;">
            <p style="font-weight:bold;">Confidence: </p>${content.confidence}
            <br>
            <p style="font-weight:bold;">Score tag: </p>${content.score_tag}
            <br>
            <p style="font-weight:bold;">Subjectivity: </p>${content.subjectivity}
            <br>
            <p style="font-weight:bold;">Irony: </p>${content.irony}
        </div>
        `
    }
}

export { changeUI }