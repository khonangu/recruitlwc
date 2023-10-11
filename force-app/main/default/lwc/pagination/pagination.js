import { LightningElement, api } from 'lwc';

export default class Pagination extends LightningElement {
    @api currentPage;
    @api totalPages;

    previousPage() {
        this.dispatchEvent(new CustomEvent('previous'));
    }

    nextPage() {
        this.dispatchEvent(new CustomEvent('next'));
    }
}
