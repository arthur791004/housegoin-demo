export default class CoreService {
  constructor($filter, SweetAlert, toastr) {
    'ngInject';

    this.$filter = $filter;
    this.toastr = toastr;
    this.SweetAlert = SweetAlert;
  }

  alert(title, text) {
    this.SweetAlert.swal(title, text);
  }

  alertSuccess(title, text) {
    this.SweetAlert.swal(title, text, 'success');
  }

  alertError(title, text) {
    this.SweetAlert.swal(title, text, 'error');
  }

  alertWarning(title, text) {
    this.SweetAlert.swal(title, text, 'warning');
  }

  alertInfo(title, text) {
    this.SweetAlert.swal(title, text, 'info');
  }

  confirm(title, text, successCb, cancelCb) {
    const config = {
      title: title,
      text: text,
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#DD6B55',
      confirmButtonText: this.$filter('translate')('MSG_CONFIRM'),
      cancelButtonText: this.$filter('translate')('MSG_CANCEL'),
    };

    this._swal(config, successCb, cancelCb);
  }

  _swal(config, successCb, cancelCb) {
    this.SweetAlert.swal(config, (confirmed) => {
      if (confirmed) {
        successCb();
      } else {
        cancelCb();
      }
    });
  }

  toastSuccess(title, text) {
    this._toastr('success', title, text);
  }

  toastError(title, text) {
    this._toastr('error', title, text);
  }

  toastWarning(title, text) {
    this._toastr('warning', title, text);
  }

  toastInfo(title, text) {
    this._toastr('info', title, text);
  }

  _toastr(level, title, text) {
    this.toastr[level](text, title);
  }
}
