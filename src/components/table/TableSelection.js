export class TableSelection {
    static className = 'selected'

    constructor() {
        this.group = []
        this.current = null
    }

    select($el) {
        this.clear()
        this.current = $el
        this.group.push($el)
        $el.focus().addClass(TableSelection.className)
    }

    clear() {
        this.group.forEach($el => $el.removeClass(TableSelection.className))
        this.group = []
    }

    selectGroup(group = []) {
        this.clear()
        group.forEach($el => {
            this.group.push($el)
            $el.addClass(TableSelection.className)
        })
    }
}
