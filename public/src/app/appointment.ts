export class Appointment {
    public date: Date = null;
    public time: String = '';
    public patient: String = localStorage.getItem('name').substring(1,localStorage.getItem('name').length - 1);
    public complain: String = '';
}