window.paletools = window.paletools || {};
window.paletools['palegrid'] = "KGZ1bmN0aW9uKCl7CiAgICAgICAgbGV0IHN0eWxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BhbGVncmlkJyk7CiAgICAgICAgaWYoIXN0eWxlKXsKICAgICAgICAgICAgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpOwogICAgICAgICAgICBzdHlsZS5pZCA9ICdwYWxlZ3JpZCc7CiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc3R5bGUpOwogICAgICAgICAgICBzdHlsZS5pbm5lclRleHQgPSAnLmxpc3RGVVRJdGVte2Rpc3BsYXk6aW5saW5lLWZsZXg7d2lkdGg6MjQuNzUlfS51aS1sYXlvdXQtbGVmdCAubGlzdEZVVEl0ZW0uaGFzLWF1Y3Rpb24tZGF0YSAuZW50aXR5Q29udGFpbmVye3dpZHRoOmF1dG99Lmxpc3RGVVRJdGVtIC5lbnRpdHlDb250YWluZXJ7ZmxvYXQ6bm9uZTtwYWRkaW5nOjA7ZGlzcGxheTpibG9ja30ubGlzdEZVVEl0ZW0gLmF1Y3Rpb257ZmxvYXQ6bm9uZTt3aWR0aDo0MyU7cG9zaXRpb246YWJzb2x1dGU7bGVmdDo1MCU7ZGlzcGxheTpibG9jazt0b3A6MzVweDttYXJnaW46MH0ucGxheWVyLXN0YXRzLWRhdGEtY29tcG9uZW50e2Rpc3BsYXk6bm9uZX0ubGlzdEZVVEl0ZW0gLmVudGl0eUNvbnRhaW5lciAubmFtZXtwYWRkaW5nOjAhaW1wb3J0YW50fS51aS1sYXlvdXQtbGVmdCAubGlzdEZVVEl0ZW0gLmF1Y3Rpb24gLmF1Y3Rpb25WYWx1ZXtmbG9hdDpsZWZ0O3dpZHRoOjEwMCV9Lmxpc3RGVVRJdGVtIC5hdWN0aW9uIC5sYWJlbHtkaXNwbGF5OmlubGluZS1ibG9jazt3aWR0aDoyNnB4O292ZXJmbG93OmhpZGRlbjt3aGl0ZS1zcGFjZTpub3dyYXA7Zm9udC1zaXplOi43NXJlbTt0ZXh0LWFsaWduOmxlZnR9Lmxpc3RGVVRJdGVtIC5hdWN0aW9uIC52YWx1ZXtkaXNwbGF5OmlubGluZS1ibG9jaztmb250LXNpemU6MTRweDtmbG9hdDpyaWdodH0ubGlzdEZVVEl0ZW0gLmF1Y3Rpb24gLnRpbWV7Zm9udC1zaXplOjE0cHg7ZmxvYXQ6cmlnaHR9Lmxpc3RGVVRJdGVtIC5hdWN0aW9uIC5hdWN0aW9uLXN0YXRle2Zsb2F0OnJpZ2h0IWltcG9ydGFudDt3aWR0aDoxMDAlIWltcG9ydGFudH0ubGlzdEZVVEl0ZW0gLnJvd0NvbnRlbnQuaGFzLXRhcC1jYWxsYmFjazo6YmVmb3JlLC5saXN0RlVUSXRlbS5yb3dDb250ZW50Lmhhcy10YXAtY2FsbGJhY2s6OmJlZm9yZXtkaXNwbGF5Om5vbmV9LmN1cnJlbmN5LWNvaW5zOjphZnRlcntkaXNwbGF5Om5vbmV9Lmxpc3RGVVRJdGVtLmhhcy1hdWN0aW9uLWRhdGEgLmVudGl0eUNvbnRhaW5lciAuZGF0YVN0cmluZ3twb3NpdGlvbjphYnNvbHV0ZTt0b3A6MTVweDtsZWZ0OjM1cHh9Lmxpc3RGVVRJdGVtLmNoZW1pc3RyeVN0eWxlIC5zdHlsZVZpZXd7ZGlzcGxheTpub25lfS5saXN0RlVUSXRlbSAucm93Q29udGVudHtib3JkZXItdG9wOjAhaW1wb3J0YW50fS5saXN0RlVUSXRlbSAuZW50aXR5Q29udGFpbmVyIC5uYW1le2ZvbnQtc2l6ZToxcmVtfS51dC1jbHViLXNlYXJjaC1yZXN1bHRzLXZpZXcgLnBsYXllci1zdGF0cy1kYXRhLWNvbXBvbmVudHtkaXNwbGF5OmJsb2NrfS51dC1jbHViLXNlYXJjaC1yZXN1bHRzLXZpZXcgLnBsYXllci1zdGF0cy1kYXRhLWNvbXBvbmVudCB1bCBsaTpmaXJzdC1jaGlsZHtwYWRkaW5nLWxlZnQ6NHB4IWltcG9ydGFudH1zZWN0aW9uLnVpLWxheW91dC1yaWdodCAubGlzdEZVVEl0ZW17aGVpZ2h0OjExMHB4O3dpZHRoOjI0LjUlO2JvcmRlci1yaWdodC13aWR0aDoxcHg7ZGlzcGxheTppbmxpbmUtYmxvY2t9c2VjdGlvbi51aS1sYXlvdXQtcmlnaHQgLmxpc3RGVVRJdGVtIC5lbnRpdHlDb250YWluZXJ7aGVpZ2h0OjEwMCU7d2lkdGg6MTAwJX1zZWN0aW9uLnVpLWxheW91dC1yaWdodCAubGlzdEZVVEl0ZW0gLmVudGl0eUNvbnRhaW5lciAuaXRlbXt3aWR0aDo5MHB4O2hlaWdodDoxMDZweH1zZWN0aW9uLnVpLWxheW91dC1yaWdodCAubGlzdEZVVEl0ZW0gLmJ0bkFjdGlvbi5hZGR7ZGlzcGxheTpub25lfXNlY3Rpb24udWktbGF5b3V0LXJpZ2h0IC5saXN0RlVUSXRlbSAuZW50aXR5Q29udGFpbmVyIC5uYW1le2Rpc3BsYXk6bm9uZX1zZWN0aW9uLnVpLWxheW91dC1yaWdodCAubGlzdEZVVEl0ZW0gLmVudGl0eUNvbnRhaW5lciAuY29uc3VtYWJsZSsubmFtZXtkaXNwbGF5OmJsb2NrO2ZvbnQtc2l6ZToxMHB4O21heC13aWR0aDoxMDAlO3Bvc2l0aW9uOmFic29sdXRlO3RvcDo5NXB4O3dpZHRoOjEwMCU7dGV4dC1hbGlnbjpjZW50ZXJ9c2VjdGlvbi51aS1sYXlvdXQtcmlnaHQgLmxpc3RGVVRJdGVtIC5lbnRpdHlDb250YWluZXIgLmNvbnN1bWFibGUrLm5hbWUrLmRhdGFTdHJpbmd7ZGlzcGxheTpibG9jaztmb250LXNpemU6MTBweDttYXgtd2lkdGg6MTAwJTtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MTJweDt3aWR0aDoxMDAlO21heC13aWR0aDoxMDAlO3RleHQtYWxpZ246Y2VudGVyfXNlY3Rpb24udWktbGF5b3V0LXJpZ2h0IC5saXN0RlVUSXRlbSAuZW50aXR5Q29udGFpbmVyIC5uYW1lLnVudHJhZGVhYmxle2NvbG9yOnJlZH1zZWN0aW9uLnVpLWxheW91dC1yaWdodCAubGlzdEZVVEl0ZW0gLmVudGl0eUNvbnRhaW5lciAubmFtZS51bnRyYWRlYWJsZTo6YmVmb3Jle2Rpc3BsYXk6bm9uZX1zZWN0aW9uLnVpLWxheW91dC1yaWdodCAubGlzdEZVVEl0ZW0gLmVudGl0eUNvbnRhaW5lciAucGxheWVyLXN0YXRzLWRhdGEtY29tcG9uZW50e2Rpc3BsYXk6bm9uZX0udXQtdHJhbnNmZXItbGlzdC12aWV3IC5zZWN0aW9uZWQtaXRlbS1saXN0Om50aC1jaGlsZCgzKSAubGlzdEZVVEl0ZW17ZGlzcGxheTppbmxpbmUtYmxvY2s7d2lkdGg6OTBweH0ubGlzdEZVVEl0ZW0gLmVudGl0eUNvbnRhaW5lciAubmFtZXtmb250LXNpemU6MTRweH0nOwogICAgICAgIH0KICAgICAgICBlbHNlIHsKICAgICAgICAgICAgc3R5bGUucmVtb3ZlKCk7CiAgICAgICAgfQogICAgICAgIAogICAgfSkoKQ=="