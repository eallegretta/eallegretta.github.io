window.paletools = window.paletools || {};
window.paletools['palesnipe-v1.5'] = "Y29uc3QgXzB4Mjc2ZT1bJzxmb3JtXHgyMGlkPVx4MjJwYWxldG9vbHMtZG9uYXRlXHgyMlx4MjBhY3Rpb249XHgyMmh0dHBzOi8vd3d3LnBheXBhbC5jb20vY2dpLWJpbi93ZWJzY3JceDIyXHgyMG1ldGhvZD1ceDIycG9zdFx4MjJceDIwdGFyZ2V0PVx4MjJfYmxhbmtceDIyPlx4MjBceDIwXHgyMFx4MjA8aW5wdXRceDIwdHlwZT1ceDIyaGlkZGVuXHgyMlx4MjBuYW1lPVx4MjJjbWRceDIyXHgyMHZhbHVlPVx4MjJfZG9uYXRpb25zXHgyMlx4MjAvPlx4MjBceDIwXHgyMFx4MjA8aW5wdXRceDIwdHlwZT1ceDIyaGlkZGVuXHgyMlx4MjBuYW1lPVx4MjJidXNpbmVzc1x4MjJceDIwdmFsdWU9XHgyMlpBSlg2QUQ2WFBMUk5ceDIyXHgyMC8+XHgyMFx4MjBceDIwXHgyMDxpbnB1dFx4MjB0eXBlPVx4MjJoaWRkZW5ceDIyXHgyMG5hbWU9XHgyMmN1cnJlbmN5X2NvZGVceDIyXHgyMHZhbHVlPVx4MjJVU0RceDIyXHgyMC8+XHgyMFx4MjBceDIwXHgyMDxhXHgyMHN0eWxlPVx4MjJ0ZXh0LWRlY29yYXRpb246bm9uZTtjb2xvcjppbmhlcml0XHgyMlx4MjBvbmNsaWNrPVx4MjJqYXZhc2NyaXB0OiQoXHgyNyNwYWxldG9vbHMtZG9uYXRlXHgyNylbMF0uc3VibWl0KClceDIyXHgyMGhyZWY9XHgyMmphdmFzY3JpcHQ6dm9pZCgwKVx4MjI+UGFsZXRvb2xzXHgyMERvbmF0ZTwvYT48L2Zvcm0+PC9hPicsJ2tleUNvZGUnLCd0eXBlJywncmVtb3ZlQ2xhc3MnLCdkaXNwYXRjaEV2ZW50JywnYXBwZW5kJywnYXBwbHknLCcuaW5jcmVtZW50LXZhbHVlOmVxKDEpJywnZGVjcmVtZW50TWF4QmluS2V5Jywnc2VydmljZXMnLCdyZXR1cm5ceDIwL1x4MjJceDIwK1x4MjB0aGlzXHgyMCtceDIwXHgyMi8nLCdzZWFyY2hCdXR0b25LZXknLCdsZW5ndGgnLCdhdXRvUHJlc3NFbnRlckFmdGVyQnV5Tm93JywnXihbXlx4MjBdKyhceDIwK1teXHgyMF0rKSspK1teXHgyMF19JywnbmF2LnV0LXRhYi1iYXInLCcxNjZxUWppSnQnLCdsb2NhbGl6ZScsJzxidXR0b25ceDIwY2xhc3M9XHgyMnV0LXRhYi1iYXItaXRlbVx4MjJceDIwc3R5bGU9XHgyMm9yZGVyOlx4MjA3XHgyMj4nLCcyMTExMTMwR3VuSUxuJywnYWRkQ2xhc3MnLCcxMTI2NDE4c1BVZ0NQJywnaW5jcmVtZW50TWF4QnV5Tm93S2V5JywnLmRlY3JlbWVudC12YWx1ZTplcSgzKScsJy51dC1uYXZpZ2F0aW9uLWJ1dHRvbi1jb250cm9sJywnLmluY3JlbWVudC12YWx1ZTplcSgyKScsJ29mZicsJ2NyZWF0ZUV2ZW50JywnZ2V0RWxlbWVudHNCeVRhZ05hbWUnLCd0ZXh0JywnLmJ1dHRvbi1jb250YWluZXJceDIwLmJ0bi1zdGFuZGFyZC5jYWxsLXRvLWFjdGlvbicsJzxidXR0b25ceDIwY2xhc3M9XHgyMnV0LXRhYi1iYXItaXRlbVx4MjJceDIwc3R5bGU9XHgyMm9yZGVyOlx4MjA3XHgyMj48YVx4MjBzdHlsZT1ceDIydGV4dC1kZWNvcmF0aW9uOm5vbmU7Y29sb3I6aW5oZXJpdFx4MjJceDIwdGFyZ2V0PVx4MjJwYWxldG9vbHNceDIyXHgyMGhyZWY9XHgyMmh0dHA6Ly9lYWxsZWdyZXR0YS5naXRodWIuaW8vcGFsZXRvb2xzLmh0bWxceDIyPlBhbGVzbmlwZVx4MjAnLCc2MDQzMzlWUWZOU3MnLCdceDIwPHNwYW5ceDIwaWQ9XHgyMnBhbGV0b29scy1zdGF0dXNceDIyXHgyMGNsYXNzPVx4MjJvblx4MjI+T048L3NwYW4+PC9hPjwvYnV0dG9uPicsJy5kZWNyZW1lbnQtdmFsdWU6ZXEoMiknLCcjcGFsZXRvb2xzLXN0YXR1cy5vblx4MjB7XHgyMGNvbG9yOlx4MjBncmVlblx4MjB9O1x4MjAjcGFsZXRvb2xzLXN0YXR1cy5vZmZceDIwe1x4MjBjb2xvcjpceDIwcmVkXHgyMH07JywnaW5pdEV2ZW50JywnbW91c2V1cCcsJ0xvY2FsaXphdGlvbicsJ01vdXNlRXZlbnRzJywnY3JlYXRlVGV4dE5vZGUnLCcxNzU2MTU0TUpRcmNYJywnLmluY3JlbWVudC12YWx1ZScsJ2FwcGVuZENoaWxkJywnZGVjcmVtZW50TWF4QnV5Tm93S2V5JywnZW5hYmxlRGlzYWJsZVBhbGVzbmlwZUtleScsJzczMDkwOW1MVUJTVCcsJzE3MjA1MzNTWU9kemEnLCcuZGVjcmVtZW50LXZhbHVlOmVxKDEpJywnc2VuZFRvVHJhbnNmZXJMaXN0QnV0dG9uS2V5JywnaGVhZCcsJy5kZWNyZW1lbnQtdmFsdWUnLCdtb3VzZWRvd24nLCd2MS41JywnaW5jcmVtZW50TWF4QmluS2V5Jywnc2VuZFRvQ2x1YkJ1dHRvbktleScsJy5idXlCdXR0b24nLCdzdHlsZScsJ2JvZHknLCdoYXNPd25Qcm9wZXJ0eScsJ2NvbnN0cnVjdG9yJywndGVzdCcsJ2NyZWF0ZUVsZW1lbnQnLCcuZGlhbG9nLWJvZHlceDIwLnV0LWJ1dHRvbi1ncm91cFx4MjBidXR0b246ZXEoMCknLCcxSG9aREVlJywnNTc5NEVXclVRUCddO2Z1bmN0aW9uIF8weDNjYzcoXzB4YTRmODQ2LF8weGZmOGIzNyl7XzB4YTRmODQ2PV8weGE0Zjg0Ni0weGJmO2xldCBfMHgyNGQwMTM9XzB4Mjc2ZVtfMHhhNGY4NDZdO3JldHVybiBfMHgyNGQwMTM7fShmdW5jdGlvbihfMHg0NzI2MTYsXzB4NWE1ODAxKXtjb25zdCBfMHgzYWM3ZTk9XzB4M2NjNzt3aGlsZSghIVtdKXt0cnl7Y29uc3QgXzB4MzJhNGY1PS1wYXJzZUludChfMHgzYWM3ZTkoMHhlNykpK3BhcnNlSW50KF8weDNhYzdlOSgweGUxKSkqcGFyc2VJbnQoXzB4M2FjN2U5KDB4ZjgpKStwYXJzZUludChfMHgzYWM3ZTkoMHhmOSkpKi1wYXJzZUludChfMHgzYWM3ZTkoMHhjOCkpKy1wYXJzZUludChfMHgzYWM3ZTkoMHhkOCkpKy1wYXJzZUludChfMHgzYWM3ZTkoMHhlNikpK3BhcnNlSW50KF8weDNhYzdlOSgweGNkKSkrcGFyc2VJbnQoXzB4M2FjN2U5KDB4Y2IpKTtpZihfMHgzMmE0ZjU9PT1fMHg1YTU4MDEpYnJlYWs7ZWxzZSBfMHg0NzI2MTZbJ3B1c2gnXShfMHg0NzI2MTZbJ3NoaWZ0J10oKSk7fWNhdGNoKF8weDE3Yjk5MCl7XzB4NDcyNjE2WydwdXNoJ10oXzB4NDcyNjE2WydzaGlmdCddKCkpO319fShfMHgyNzZlLDB4ZWU0ZjUpLGZ1bmN0aW9uKCl7Y29uc3QgXzB4NDllZGEyPV8weDNjYzcsXzB4MmZjZTY9ZnVuY3Rpb24oKXtsZXQgXzB4MzJmYmZhPSEhW107cmV0dXJuIGZ1bmN0aW9uKF8weDRjMmNkZCxfMHgxZjgzYjApe2NvbnN0IF8weDI2ZDJmZT1fMHgzMmZiZmE/ZnVuY3Rpb24oKXtjb25zdCBfMHgzMGU1Yzc9XzB4M2NjNztpZihfMHgxZjgzYjApe2NvbnN0IF8weDQwZDI4Nz1fMHgxZjgzYjBbXzB4MzBlNWM3KDB4MTAwKV0oXzB4NGMyY2RkLGFyZ3VtZW50cyk7cmV0dXJuIF8weDFmODNiMD1udWxsLF8weDQwZDI4Nzt9fTpmdW5jdGlvbigpe307cmV0dXJuIF8weDMyZmJmYT0hW10sXzB4MjZkMmZlO307fSgpLF8weDQzMjM0Mj1fMHgyZmNlNih0aGlzLGZ1bmN0aW9uKCl7Y29uc3QgXzB4MzQzYmI3PWZ1bmN0aW9uKCl7Y29uc3QgXzB4NGVlZGU2PV8weDNjYzcsXzB4MzdlZWUwPV8weDM0M2JiN1tfMHg0ZWVkZTYoMHhmNCldKF8weDRlZWRlNigweGMyKSkoKVtfMHg0ZWVkZTYoMHhmNCldKF8weDRlZWRlNigweGM2KSk7cmV0dXJuIV8weDM3ZWVlMFtfMHg0ZWVkZTYoMHhmNSldKF8weDQzMjM0Mik7fTtyZXR1cm4gXzB4MzQzYmI3KCk7fSk7XzB4NDMyMzQyKCk7Y29uc3QgXzB4OGQ3OTU9XzB4NDllZGEyKDB4ZWQpO2xldCBfMHhiNDMwMGY9eydkZWNyZW1lbnRNaW5CaWRLZXknOjB4MjUsJ2luY3JlbWVudE1pbkJpbktleSc6MHgyNywnZGVjcmVtZW50TWF4QmluS2V5JzoweDYyLCdpbmNyZW1lbnRNYXhCaW5LZXknOjB4NjgsJ2RlY3JlbWVudE1pbkJ1eU5vd0tleSc6MHg2NCwnaW5jcmVtZW50TWluQnV5Tm93S2V5JzoweDY2LCdkZWNyZW1lbnRNYXhCdXlOb3dLZXknOjB4MjgsJ2luY3JlbWVudE1heEJ1eU5vd0tleSc6MHgyNiwnYmFja0J1dHRvbktleSc6MHgzMSwnc2VhcmNoQnV0dG9uS2V5JzoweDMyLCdidXlOb3dCdXR0b25LZXknOjB4MzMsJ3NlbmRUb1RyYW5zZmVyTGlzdEJ1dHRvbktleSc6MHgzNCwnc2VuZFRvQ2x1YkJ1dHRvbktleSc6MHgzNSwnYXV0b1ByZXNzRW50ZXJBZnRlckJ1eU5vdyc6ISFbXSwnYXV0b0J1eUFmdGVyU2VhcmNoJzohW10sJ2VuYWJsZURpc2FibGVQYWxlc25pcGVLZXknOjB4OX0sXzB4M2MyNjczPXdpbmRvd1tfMHg0OWVkYTIoMHhjMSldW18weDQ5ZWRhMigweGRlKV0sXzB4NzhjY2ZjPSEhW10sXzB4NTZmMjFkPW5ldyBEYXRlKCk7Y29uc3QgXzB4NDI0Njc0PTB4MWY0LF8weDE3NDUxMj0oXzB4MzcxYjY0LF8weDI0MmNkMCk9Pntjb25zdCBfMHg0ZjU4YzU9XzB4NDllZGEyO2lmKF8weDM3MWI2NFtfMHg0ZjU4YzUoMHhjNCldPT0weDApcmV0dXJuO2NvbnN0IF8weGEzNmMxOD1kb2N1bWVudFtfMHg0ZjU4YzUoMHhkMyldKF8weDRmNThjNSgweGRmKSk7XzB4YTM2YzE4W18weDRmNThjNSgweGRjKV0oXzB4MjQyY2QwKSxfMHgzNzFiNjRbMHgwXVtfMHg0ZjU4YzUoMHhmZSldKF8weGEzNmMxOCk7fSxfMHg0YzBlNjI9XzB4M2VlM2RiPT5fMHgxNzQ1MTIoXzB4M2VlM2RiLF8weDQ5ZWRhMigweGVjKSksXzB4NGI1ZjYyPV8weDEzNTc2Mj0+XzB4MTc0NTEyKF8weDEzNTc2MixfMHg0OWVkYTIoMHhkZCkpLF8weDQxOGY2Mz1fMHg0NzY5ZGI9PntfMHg0YzBlNjIoXzB4NDc2OWRiKSxfMHg0YjVmNjIoXzB4NDc2OWRiKTt9LF8weDE0MTQ5Mz1fMHg0Y2UzMjc9PntmdW5jdGlvbiBfMHg0M2MwODYoKXtjb25zdCBfMHgxNjNmZGU9XzB4M2NjNztfMHg0MThmNjMoJChfMHgxNjNmZGUoMHhmMCkpKSxfMHhiNDMwMGZbXzB4MTYzZmRlKDB4YzUpXSYmXzB4NTUwNGE3KCk7fWlmKF8weDRjZTMyNyl7c2V0VGltZW91dChfMHg0M2MwODYsXzB4NGNlMzI3KTtyZXR1cm47fV8weDQzYzA4NigpO30sXzB4NTUwNGE3PSgpPT5zZXRUaW1lb3V0KCgpPT5fMHg0MThmNjMoJChfMHg0OWVkYTIoMHhmNykpKSwweDY0KSxfMHgxYzcxOTc9e1tfMHhiNDMwMGZbJ2RlY3JlbWVudE1pbkJpZEtleSddXTooKT0+XzB4NDE4ZjYzKCQoXzB4NDllZGEyKDB4ZWIpKSksW18weGI0MzAwZlsnaW5jcmVtZW50TWluQmluS2V5J11dOigpPT5fMHg0MThmNjMoJChfMHg0OWVkYTIoMHhlMikpKSxbXzB4YjQzMDBmW18weDQ5ZWRhMigweGMwKV1dOigpPT5fMHg0MThmNjMoJChfMHg0OWVkYTIoMHhlOCkpKSxbXzB4YjQzMDBmW18weDQ5ZWRhMigweGVlKV1dOigpPT5fMHg0MThmNjMoJChfMHg0OWVkYTIoMHhiZikpKSxbXzB4YjQzMDBmWydkZWNyZW1lbnRNaW5CdXlOb3dLZXknXV06KCk9Pl8weDQxOGY2MygkKF8weDQ5ZWRhMigweGRhKSkpLFtfMHhiNDMwMGZbJ2luY3JlbWVudE1pbkJ1eU5vd0tleSddXTooKT0+XzB4NDE4ZjYzKCQoXzB4NDllZGEyKDB4ZDEpKSksW18weGI0MzAwZltfMHg0OWVkYTIoMHhlNCldXTooKT0+XzB4NDE4ZjYzKCQoXzB4NDllZGEyKDB4Y2YpKSksW18weGI0MzAwZltfMHg0OWVkYTIoMHhjZSldXTooKT0+XzB4NDE4ZjYzKCQoJy5pbmNyZW1lbnQtdmFsdWU6ZXEoMyknKSksW18weGI0MzAwZlsnYmFja0J1dHRvbktleSddXTooKT0+e2NvbnN0IF8weDU3MmQ0MD1fMHg0OWVkYTI7aWYobmV3IERhdGUoKS1fMHg1NmYyMWQ8XzB4NDI0Njc0KXJldHVybjtfMHg1NmYyMWQ9bmV3IERhdGUoKSxfMHg0MThmNjMoJChfMHg1NzJkNDAoMHhkMCkpKTt9LFtfMHhiNDMwMGZbXzB4NDllZGEyKDB4YzMpXV06KCk9Pntjb25zdCBfMHg1MTEzMGM9XzB4NDllZGEyO18weDQxOGY2MygkKF8weDUxMTMwYygweGQ2KSkpLF8weGI0MzAwZlsnYXV0b0J1eUFmdGVyU2VhcmNoJ10mJl8weDE0MTQ5MygweDY0KTt9LFtfMHhiNDMwMGZbJ2J1eU5vd0J1dHRvbktleSddXTooKT0+XzB4MTQxNDkzKCksW18weGI0MzAwZltfMHg0OWVkYTIoMHhlOSldXTooKT0+XzB4NDE4ZjYzKCQoJy51dC1idXR0b24tZ3JvdXBceDIwPlx4MjBidXR0b246Y29udGFpbnMoXHgyNycrXzB4M2MyNjczW18weDQ5ZWRhMigweGM5KV0oJ2luZm9wYW5lbC5sYWJlbC5zZW5kVHJhZGVQaWxlJykrJ1x4MjcpJykpLFtfMHhiNDMwMGZbXzB4NDllZGEyKDB4ZWYpXV06KCk9Pl8weDQxOGY2MygkKCcudXQtYnV0dG9uLWdyb3VwXHgyMD5ceDIwYnV0dG9uOmNvbnRhaW5zKFx4MjcnK18weDNjMjY3M1snbG9jYWxpemUnXSgnaW5mb3BhbmVsLmxhYmVsLnN0b3JlSW5DbHViJykrJ1x4MjcpJykpfTtkb2N1bWVudFtfMHg0OWVkYTIoMHhmMildWydvbmtleWRvd24nXT1fMHg0N2Q1ZGU9Pntjb25zdCBfMHgzMWEwOTU9XzB4NDllZGEyO18weDQ3ZDVkZVtfMHgzMWEwOTUoMHhmYildPT1fMHhiNDMwMGZbXzB4MzFhMDk1KDB4ZTUpXSYmKF8weDc4Y2NmYz0hXzB4NzhjY2ZjLF8weDc4Y2NmYz8kKCcjcGFsZXRvb2xzLXN0YXR1cycpW18weDMxYTA5NSgweGZkKV0oXzB4MzFhMDk1KDB4ZDIpKVsnYWRkQ2xhc3MnXSgnb24nKVtfMHgzMWEwOTUoMHhkNSldKCdPTicpOiQoJyNwYWxldG9vbHMtc3RhdHVzJylbXzB4MzFhMDk1KDB4ZmQpXSgnb24nKVtfMHgzMWEwOTUoMHhjYyldKF8weDMxYTA5NSgweGQyKSlbXzB4MzFhMDk1KDB4ZDUpXSgnT0ZGJykpO2lmKCFfMHg3OGNjZmN8fCFfMHgxYzcxOTdbXzB4MzFhMDk1KDB4ZjMpXShfMHg0N2Q1ZGVbXzB4MzFhMDk1KDB4ZmIpXSkpcmV0dXJuO18weDFjNzE5N1tfMHg0N2Q1ZGVbJ2tleUNvZGUnXV0oKTt9O2NvbnN0IF8weDNhOTU0Mj1fMHg0OWVkYTIoMHhkYiksXzB4NTBkNjVjPWRvY3VtZW50W18weDQ5ZWRhMigweGVhKV18fGRvY3VtZW50W18weDQ5ZWRhMigweGQ0KV0oJ2hlYWQnKVsweDBdLF8weDI3MzUxMj1kb2N1bWVudFtfMHg0OWVkYTIoMHhmNildKF8weDQ5ZWRhMigweGYxKSk7XzB4NTBkNjVjW18weDQ5ZWRhMigweGUzKV0oXzB4MjczNTEyKSxfMHgyNzM1MTJbXzB4NDllZGEyKDB4ZmMpXT0ndGV4dC9jc3MnLF8weDI3MzUxMltfMHg0OWVkYTIoMHhlMyldKGRvY3VtZW50W18weDQ5ZWRhMigweGUwKV0oXzB4M2E5NTQyKSk7bGV0IF8weDJiMmUzNz1fMHg0OWVkYTIoMHhmYSk7JChfMHg0OWVkYTIoMHhjNykpW18weDQ5ZWRhMigweGZmKV0oXzB4NDllZGEyKDB4ZDcpK18weDhkNzk1K18weDQ5ZWRhMigweGQ5KSlbXzB4NDllZGEyKDB4ZmYpXShfMHg0OWVkYTIoMHhjYSkrXzB4MmIyZTM3Kyc8L2J1dHRvbj4nKTt9KCkpOw=="