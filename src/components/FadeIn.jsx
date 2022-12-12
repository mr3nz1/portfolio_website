import React from 'react'

function FadeIn(props) {
    const [isVisible, setIsVisible] = React.useState(false);
    const documentRef = React.useRef();
    const { children } = props

    React.useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                setIsVisible(entry.isIntersecting);
            });
        })
        observer.observe(documentRef.current)
    }, [])


    return (
        <div ref={documentRef} className={`fade-in-section ${isVisible ? "is-visible" : ""}`}>
            {children}
        </div>
    )
}

export default FadeIn