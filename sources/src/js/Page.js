class Page {
    constructor($wrapper, param) {
        this.$wrapper = $wrapper
        this.param = {... {
                lockClass: 'is-locked',
                varHeight: '--window-height'
            },
            ...param
        }
        this.html = document.querySelector('html')
        this._fixed = false
        this._dub = false
        this._scroll = 0

        try {
            this.syncHeight()
            window.addEventListener('resize', () => {
                this.syncHeight()
            })
        } catch (error) {
            throw new Error(error)
        }
    }

    fixed(state = !this._fixed) {
        this._dub = this._fixed === state
        this._fixed = state
        if (!this._dub) {
            if (this._fixed) {
                this._scroll = window.scrollY
                this.html.classList.add(this.param.lockClass)
                this.$wrapper.style.top = `-${this._scroll}px`
            } else {
                this.html.classList.remove(this.param.lockClass)
                this.$wrapper.style.top = '0'
                window.scroll(0, this._scroll)
            }
        }
    }

    syncHeight(height = window.innerHeight) {
        this._height = height
        this.html.style.setProperty(this.param.varHeight, `${this._height}px`)
    }
}