window.paletools = window.paletools || {};
window.paletools['paletools-min-undefined'] = "IWZ1bmN0aW9uKHQpe2NvbnN0IGU9WyIiLCIiLCIiLCJDQU5DRUwiLCIiLCIiLCJIRUxQIiwiIiwiQkFDS19TUEFDRSIsIlRBQiIsIiIsIiIsIkNMRUFSIiwiRU5URVIiLCJFTlRFUl9TUEVDSUFMIiwiIiwiU0hJRlQiLCJDT05UUk9MIiwiQUxUIiwiUEFVU0UiLCJDQVBTX0xPQ0siLCJLQU5BIiwiRUlTVSIsIkpVTkpBIiwiRklOQUwiLCJIQU5KQSIsIiIsIkVTQ0FQRSIsIkNPTlZFUlQiLCJOT05DT05WRVJUIiwiQUNDRVBUIiwiTU9ERUNIQU5HRSIsIlNQQUNFIiwiUEFHRV9VUCIsIlBBR0VfRE9XTiIsIkVORCIsIkhPTUUiLCJMRUZUIiwiVVAiLCJSSUdIVCIsIkRPV04iLCJTRUxFQ1QiLCJQUklOVCIsIkVYRUNVVEUiLCJQUklOVFNDUkVFTiIsIklOU0VSVCIsIkRFTEVURSIsIiIsIjAiLCIxIiwiMiIsIjMiLCI0IiwiNSIsIjYiLCI3IiwiOCIsIjkiLCJDT0xPTiIsIlNFTUlDT0xPTiIsIkxFU1NfVEhBTiIsIkVRVUFMUyIsIkdSRUFURVJfVEhBTiIsIlFVRVNUSU9OX01BUksiLCJBVCIsIkEiLCJCIiwiQyIsIkQiLCJFIiwiRiIsIkciLCJIIiwiSSIsIkoiLCJLIiwiTCIsIk0iLCJOIiwiTyIsIlAiLCJRIiwiUiIsIlMiLCJUIiwiVSIsIlYiLCJXIiwiWCIsIlkiLCJaIiwiT1NfS0VZIiwiIiwiQ09OVEVYVF9NRU5VIiwiIiwiU0xFRVAiLCJOVU1QQUQwIiwiTlVNUEFEMSIsIk5VTVBBRDIiLCJOVU1QQUQzIiwiTlVNUEFENCIsIk5VTVBBRDUiLCJOVU1QQUQ2IiwiTlVNUEFENyIsIk5VTVBBRDgiLCJOVU1QQUQ5IiwiTVVMVElQTFkiLCJBREQiLCJTRVBBUkFUT1IiLCJTVUJUUkFDVCIsIkRFQ0lNQUwiLCJESVZJREUiLCJGMSIsIkYyIiwiRjMiLCJGNCIsIkY1IiwiRjYiLCJGNyIsIkY4IiwiRjkiLCJGMTAiLCJGMTEiLCJGMTIiLCJGMTMiLCJGMTQiLCJGMTUiLCJGMTYiLCJGMTciLCJGMTgiLCJGMTkiLCJGMjAiLCJGMjEiLCJGMjIiLCJGMjMiLCJGMjQiLCIiLCIiLCIiLCIiLCIiLCIiLCIiLCIiLCJOVU1fTE9DSyIsIlNDUk9MTF9MT0NLIiwiV0lOX09FTV9GSl9KSVNITyIsIldJTl9PRU1fRkpfTUFTU0hPVSIsIldJTl9PRU1fRkpfVE9VUk9LVSIsIldJTl9PRU1fRkpfTE9ZQSIsIldJTl9PRU1fRkpfUk9ZQSIsIiIsIiIsIiIsIiIsIiIsIiIsIiIsIiIsIiIsIkNJUkNVTUZMRVgiLCJFWENMQU1BVElPTiIsIkRPVUJMRV9RVU9URSIsIkhBU0giLCJET0xMQVIiLCJQRVJDRU5UIiwiQU1QRVJTQU5EIiwiVU5ERVJTQ09SRSIsIk9QRU5fUEFSRU4iLCJDTE9TRV9QQVJFTiIsIkFTVEVSSVNLIiwiUExVUyIsIlBJUEUiLCJIWVBIRU5fTUlOVVMiLCJPUEVOX0NVUkxZX0JSQUNLRVQiLCJDTE9TRV9DVVJMWV9CUkFDS0VUIiwiVElMREUiLCIiLCIiLCIiLCIiLCJWT0xVTUVfTVVURSIsIlZPTFVNRV9ET1dOIiwiVk9MVU1FX1VQIiwiIiwiIiwiU0VNSUNPTE9OIiwiRVFVQUxTIiwiQ09NTUEiLCJNSU5VUyIsIlBFUklPRCIsIlNMQVNIIiwiQkFDS19RVU9URSIsIiIsIiIsIiIsIiIsIiIsIiIsIiIsIiIsIiIsIiIsIiIsIiIsIiIsIiIsIiIsIiIsIiIsIiIsIiIsIiIsIiIsIiIsIiIsIiIsIiIsIiIsIk9QRU5fQlJBQ0tFVCIsIkJBQ0tfU0xBU0giLCJDTE9TRV9CUkFDS0VUIiwiUVVPVEUiLCIiLCJNRVRBIiwiQUxUR1IiLCIiLCJXSU5fSUNPX0hFTFAiLCJXSU5fSUNPXzAwIiwiIiwiV0lOX0lDT19DTEVBUiIsIiIsIiIsIldJTl9PRU1fUkVTRVQiLCJXSU5fT0VNX0pVTVAiLCJXSU5fT0VNX1BBMSIsIldJTl9PRU1fUEEyIiwiV0lOX09FTV9QQTMiLCJXSU5fT0VNX1dTQ1RSTCIsIldJTl9PRU1fQ1VTRUwiLCJXSU5fT0VNX0FUVE4iLCJXSU5fT0VNX0ZJTklTSCIsIldJTl9PRU1fQ09QWSIsIldJTl9PRU1fQVVUTyIsIldJTl9PRU1fRU5MVyIsIldJTl9PRU1fQkFDS1RBQiIsIkFUVE4iLCJDUlNFTCIsIkVYU0VMIiwiRVJFT0YiLCJQTEFZIiwiWk9PTSIsIiIsIlBBMSIsIldJTl9PRU1fQ0xFQVIiLCIiXTtsZXQgbj0hMCxvPW5ldyBEYXRlLGk9bnVsbCxhPW51bGw7dD0kLmV4dGVuZCh7YmFjazo0OSxlbmFibGVEaXNhYmxlOjkyLHRlY2g6ODQsbGlzdHM6e3VwOjM4LGRvd246NDAscHJldjozNyxuZXh0OjM5fSxzZWFyY2g6e2RlY01pbkJpZDozNyxpbmNNaW5CaWQ6MzksZGVjTWF4QmlkOjM1LGluY01heEJpZDozNixkZWNNaW5CdXk6NDYsaW5jTWluQnV5OjM0LGRlY01heEJ1eTo0MCxpbmNNYXhCdXk6Mzgsc2VhcmNoOjUwfSxyZXN1bHRzOntiaWQ6NTIsYnV5OjUxLHRyYW5zZmVyOjgyLGNsdWI6NjcscHJlc3NFbnRlcjohMCxhdXRvQnV5OiExLHByZXZlbnRCYWNrOiEwLHNlbGw6ODEsZGVjQmlkOjQ2LGluY0JpZDozNH19LHR8fHt9KTtjb25zdCBsPXdpbmRvdy5NdXRhdGlvbk9ic2VydmVyfHx3aW5kb3cuV2ViS2l0TXV0YXRpb25PYnNlcnZlcixzPXQscj13aW5kb3cuc2VydmljZXMuTG9jYWxpemF0aW9uLGM9d2luZG93LnNlcnZpY2VzLkxvY2FsaXphdGlvbi5sb2NhbGl6ZSgic2VhcmNoLmZpbHRlcnMucGxheWVycyIpLEE9d2luZG93LnNlcnZpY2VzLkxvY2FsaXphdGlvbi5sb2NhbGl6ZSgiY2FyZC50aXRsZS5zcXVhZGZpdG5lc3MiKSxwPXdpbmRvdy5zZXJ2aWNlcy5Mb2NhbGl6YXRpb24ubG9jYWxpemUoImNhcmQudGl0bGUuY29udHJhY3QiKSx1PSh0LGUpPT57bGV0IG49bmV3IGwoZnVuY3Rpb24odCxuKXsodFswXS5hZGRlZE5vZGVzLmxlbmd0aHx8dFswXS5yZW1vdmVkTm9kZXMubGVuZ3RoKSYmZSgpfSk7cmV0dXJuIG4ub2JzZXJ2ZSh0LHtjaGlsZExpc3Q6ITAsc3VidHJlZTohMH0pLG59LGQ9KHQsZSk9PntpZigwPT10Lmxlbmd0aClyZXR1cm4hMTtjb25zdCBuPWRvY3VtZW50LmNyZWF0ZUV2ZW50KCJNb3VzZUV2ZW50cyIpO3JldHVybiBuLmluaXRFdmVudChlKSx0WzBdLmRpc3BhdGNoRXZlbnQobiksITB9LEU9dD0+KHQ9PmQodCwibW91c2Vkb3duIikpKHQpJiYodD0+ZCh0LCJtb3VzZXVwIikpKHQpLGg9KHQsZSk9PiQoIi5wbGF5ZXItc3RhdHMtZGF0YS1jb21wb25lbnQgLnZhbHVlIix0KVtlXS50ZXh0Q29udGVudCxiPXtvdnI6dD0+JCgiLnJhdGluZyIsdClbMF0udGV4dENvbnRlbnQscGFjOnQ9PmgodCwwKSxzaG86dD0+aCh0LDEpLHBhczp0PT5oKHQsMiksZHJpOnQ9PmgodCwzKSxkZWY6dD0+aCh0LDQpLHBoeTp0PT5oKHQsNSl9LHY9JCgiLnV0LWZpZmEtaGVhZGVyLXZpZXciKSxOPXQ9PntpZigwPT0odD10fHwkKCIuU2VhcmNoUmVzdWx0cyIpKS5sZW5ndGgpcmV0dXJuO2xldCBlPSQoIi5saXN0RlVUSXRlbSIsdCk7aWYoMD09ZS5sZW5ndGh8fGUuZmlsdGVyKCdbcHJvY2Vzc2VkPSJ0cnVlIl0nKS5sZW5ndGg+MClyZXR1cm47bGV0IG49JCgiI3NxdWFkRml0bmVzcyIpLnZhbCgpLG89JCgiI2NvbnRyYWN0cyIpLnZhbCgpO2UuZWFjaCgodCxlKT0+e2xldCBpPSQoZSksYT0hMTtpZihpLmF0dHIoInByb2Nlc3NlZCIsInRydWUiKSwicGxheWVyIj09PVIpaWYoMD09KHQ9PntsZXQgZT0kKCIjY2FyZC10eXBlIikudmFsKCk7aWYoIisiPT09ZS5jaGFyQXQoMCkpe2U9ZS5zdWJzdHIoMSk7bGV0IG49JCgiY2FudmFzIix0KVswXS50b0RhdGFVUkwoImltYWdlL3BuZyIpLnN1YnN0cig4NCw1KTtyZXR1cm4gTChuKSxMKGUpLG49PWU/MTowfXJldHVybiAkKGUsdCkubGVuZ3RofSkoZSkpYT0hMDtlbHNlIGZvcih2YXIgbCBpbiBiKXtsZXQgdD0kLnRyaW0oJChgI18ke2x9YCkudmFsKCkpO2lmKCF0KWNvbnRpbnVlO2xldCBuPXBhcnNlSW50KHQpLG89cGFyc2VJbnQoYltsXShlKSk7aWYobjwwJiZvPk1hdGguYWJzKG4pP2E9ITA6IisiPT10LmNoYXJBdCgwKSYmbzxuP2E9ITA6biE9byYmKGE9ITApLGEpYnJlYWt9ZWxzZSgiZml0bmVzcyI9PT1SJiYodD0+JChgLm5hbWU6Y29udGFpbnMoJHtBfSlgLHQpLmxlbmd0aD4wPyQoIi5zdWJ0eXBlIix0KVswXS50ZXh0Q29udGVudDpudWxsKShlKSE9bnx8ImNvbnRyYWN0cyI9PT1SJiYodD0+JCgiLmNvbnRyYWN0cyIsdCkuaGFzQ2xhc3MoInJhcmUiKT8icmFyZSI6ImNvbW1vbiIpKGUpIT1vKSYmKGE9ITApO2kuYWRkQ2xhc3MoYT8iaGlkZSI6InNob3ciKX0pLChlPSQoIi5saXN0RlVUSXRlbS5zaG93Iix0KSkubGVuZ3RoPjAmJnNldFRpbWVvdXQoZnVuY3Rpb24oKXtFKGUpfSwwKSxmaWx0ZXJMaXN0PSExfSxNPSgpPT57bGV0IHQ9JCgiLmRpYWxvZy1ib2R5IC51dC1idXR0b24tZ3JvdXAgYnV0dG9uOmVxKDApIik7RSh0KT9CKCk6c2V0VGltZW91dChNLDEwKX0sVD0oKT0+e2xldCB0PSQoIi5TZWFyY2hSZXN1bHRzIik7MCE9dC5sZW5ndGg/KEwoInNldCBpdGVtcyBmaWx0ZXIgLSBjb250YWluZXIgZm91bmQiKSxhJiZhLmRpc2Nvbm5lY3QoKSxOKHQpLGkmJmkuZGlzY29ubmVjdCgpLGk9dSh0WzBdLCgpPT57Tih0KX0pKTpMKCJzZXQgaXRlbXMgZmlsdGVyIC0gbm8gY29udGFpbmVyIil9LE89KCk9PntuZXcgRGF0ZS1vPDUwMHx8KG89bmV3IERhdGUsRSgkKCIudXQtbmF2aWdhdGlvbi1idXR0b24tY29udHJvbCIpKXx8c2V0VGltZW91dChPLDEwKSl9LG09KCk9PiQoYC51dC1idXR0b24tZ3JvdXAgPiBidXR0b246Y29udGFpbnMoJyR7ci5sb2NhbGl6ZSgiaW5mb3BhbmVsLmxhYmVsLnNlbmRUcmFkZVBpbGUiKX0nKWApLGc9KCk9PiQoYC51dC1idXR0b24tZ3JvdXAgPiBidXR0b246Y29udGFpbnMoJyR7ci5sb2NhbGl6ZSgiaW5mb3BhbmVsLmxhYmVsLnN0b3JlSW5DbHViIil9JylgKSxDPSgpPT4kKGAudXQtYnV0dG9uLWdyb3VwID4gYnV0dG9uOmNvbnRhaW5zKCcke3IubG9jYWxpemUoImluZm9wYW5lbC5sYWJlbC5kaXNjYXJkIil9JylgKSxJPSgpPT57dHJ5e2xldCB0PXt9O2lmKCQoIi51dC1tYXJrZXQtc2VhcmNoLWZpbHRlcnMtdmlldyIpLmxlbmd0aD4wKXRbcy5zZWFyY2guZGVjTWluQmlkXT0oKCk9PkUoJCgiLmRlY3JlbWVudC12YWx1ZSIpKSksdFtzLnNlYXJjaC5pbmNNaW5CaWRdPSgoKT0+RSgkKCIuaW5jcmVtZW50LXZhbHVlIikpKSx0W3Muc2VhcmNoLmRlY01heEJpZF09KCgpPT5FKCQoIi5kZWNyZW1lbnQtdmFsdWU6ZXEoMSkiKSkpLHRbcy5zZWFyY2guaW5jTWF4QmlkXT0oKCk9PkUoJCgiLmluY3JlbWVudC12YWx1ZTplcSgxKSIpKSksdFtzLnNlYXJjaC5kZWNNaW5CdXldPSgoKT0+RSgkKCIuZGVjcmVtZW50LXZhbHVlOmVxKDIpIikpKSx0W3Muc2VhcmNoLmluY01pbkJ1eV09KCgpPT5FKCQoIi5pbmNyZW1lbnQtdmFsdWU6ZXEoMikiKSkpLHRbcy5zZWFyY2guZGVjTWF4QnV5XT0oKCk9PkUoJCgiLmRlY3JlbWVudC12YWx1ZTplcSgzKSIpKSksdFtzLnNlYXJjaC5pbmNNYXhCdXldPSgoKT0+RSgkKCIuaW5jcmVtZW50LXZhbHVlOmVxKDMpIikpKSx0W3Muc2VhcmNoLnNlYXJjaF09KCgpPT4oKCk9PntFKCQoIi5idXR0b24tY29udGFpbmVyIC5idG4tc3RhbmRhcmQuY2FsbC10by1hY3Rpb24iKSk7bGV0IHQ9JCgiLnV0LW5hdmlnYXRpb24tY29udGFpbmVyLXZpZXctLWNvbnRlbnQiKTthPXUodFswXSwoKT0+e1QoKX0pfSkoKSk7ZWxzZXtsZXQgZT0kKCIubGlzdEZVVEl0ZW0uc2hvdyIpLG49ZS5sZW5ndGg+MCxvPWUucGFyZW50cygiLnBhZ2luYXRlZCwgLnV0LXdhdGNoLWxpc3QtdmlldywgLnV0LXRyYW5zZmVyLWxpc3QtdmlldyIpO2lmKDA9PW8ubGVuZ3RoJiYobz1lLnBhcmVudCgpKSxuJiYkKCIuRGV0YWlsUGFuZWwgPiAuYmlkT3B0aW9ucyIpLmxlbmd0aD4wJiYodFtzLnJlc3VsdHMuYmlkXT0oKCk9PkUoJCgiLmJpZEJ1dHRvbiIpKSksdFtzLnJlc3VsdHMuYnV5XT0oKCk9PnZvaWQoRSgkKCIuYnV5QnV0dG9uIikpJiZzLnJlc3VsdHMucHJlc3NFbnRlciYmTSgpKSksdFtzLnJlc3VsdHMuZGVjQmlkXT0oKCk9PkUoJCgiLmJpZE9wdGlvbnMgLmRlY3JlbWVudC12YWx1ZSIpKSksdFtzLnJlc3VsdHMuaW5jQmlkXT0oKCk9PkUoJCgiLmJpZE9wdGlvbnMgLmluY3JlbWVudC12YWx1ZSIpKSkpLG4mJiQoIi5EZXRhaWxQYW5lbCA+IC51dC1idXR0b24tZ3JvdXAiKS5sZW5ndGg+MCYmKHRbcy5yZXN1bHRzLnRyYW5zZmVyXT0oKCk9PkUobSgpKSksdFtzLnJlc3VsdHMuY2x1Yl09KCgpPT5FKGcoKSkpLHRbcy5yZXN1bHRzLnNlbGxdPSgoKT0+RShDKCkpKSksbil7bGV0IGU9JCgiLmxpc3RGVVRJdGVtLnNlbGVjdGVkIixvKTt0W3MubGlzdHMudXBdPSgoKT0+e2xldCB0PWUucHJldigpO2Zvcig7MT09dC5sZW5ndGgmJiF0Lmhhc0NsYXNzKCJzaG93Iik7KXQ9dC5wcmV2KCk7MCE9dC5sZW5ndGgmJihFKHQpLG8uY3NzKCJwb3NpdGlvbiIsInJlbGF0aXZlIikuc2Nyb2xsVG9wKG8uc2Nyb2xsVG9wKCkrdC5wb3NpdGlvbigpLnRvcC10LmhlaWdodCgpKSl9KSx0W3MubGlzdHMuZG93bl09KCgpPT57bGV0IHQ9ZS5uZXh0KCk7Zm9yKDsxPT10Lmxlbmd0aCYmIXQuaGFzQ2xhc3MoInNob3ciKTspdD10Lm5leHQoKTswIT10Lmxlbmd0aCYmKEUodCksby5jc3MoInBvc2l0aW9uIiwicmVsYXRpdmUiKS5zY3JvbGxUb3Aoby5zY3JvbGxUb3AoKSt0LnBvc2l0aW9uKCkudG9wLXQuaGVpZ2h0KCkpKX0pfSQoIi5wYWdpbmdDb250YWluZXIiKS5sZW5ndGg+MCYmKHRbcy5saXN0cy5wcmV2XT0oKCk9PkUoJCgiLnBhZ2luZ0NvbnRhaW5lciAucHJldjp2aXNpYmxlIikpKSx0W3MubGlzdHMubmV4dF09KCgpPT5FKCQoIi5wYWdpbmdDb250YWluZXIgLm5leHQ6dmlzaWJsZSIpKSkpfXJldHVybiB0fWNhdGNoKHQpe0wodCl9fSxCPSgpPT57dmFyIHQ9bSgpO2lmKDA9PXQubGVuZ3RoKXJldHVybiB2b2lkIHNldFRpbWVvdXQoQiw1MCk7bGV0IG49KHQsbik9PntpZighdClyZXR1cm47bGV0IG89YCBbICR7ZVtzLnJlc3VsdHNbbl1dfSBdYCxpPXQuaHRtbCgpO2kmJi0xPT1pLmluZGV4T2YobykmJnQuaHRtbCh0Lmh0bWwoKStvKX07bih0LCJ0cmFuc2ZlciIpLG4oZygpLCJjbHViIiksbihDKCksInNlbGwiKX0sTD10PT57JCgiI2xvZyIpLnZhbChgJHtuZXcgRGF0ZX06ICR7dH1cbiR7JCgiI2xvZyIpLnZhbCgpfWApfTt2LmFwcGVuZCgiPHRleHRhcmVhIGlkPSdsb2cnIHN0eWxlPSdwb3NpdGlvbjphYnNvbHV0ZTtib3R0b206MDtsZWZ0OjA7ei1pbmRleDoxMDAwJyByb3dzPScxMCcgY29scz0nMjAwJz48L3RleHRhcmVhPiIpO2xldCBSPSJwbGF5ZXIiOyQoYDxzZWxlY3Qgc3R5bGU9ImhlaWdodDo0NnB4Ij48b3B0aW9uIHZhbHVlPSJwbGF5ZXIiPiR7Y308L29wdGlvbj48b3B0aW9uIHZhbHVlPSJmaXRuZXNzIj4ke0F9PC9vcHRpb24+PG9wdGlvbiB2YWx1ZT0iY29udHJhY3RzIj4ke3B9PC9vcHRpb24+PC9zZWxlY3Q+YCkuY2hhbmdlKGZ1bmN0aW9uKCl7Uj10aGlzLnZhbHVlLGYuaGlkZSgpLFMuaGlkZSgpLFAuaGlkZSgpLCJwbGF5ZXIiPT10aGlzLnZhbHVlP2Yuc2hvdygpOiJmaXRuZXNzIj09PXRoaXMudmFsdWU/Uy5zaG93KCk6ImNvbnRyYWN0cyI9PT10aGlzLnZhbHVlJiZQLnNob3coKX0pLmFwcGVuZFRvKHYpO2xldCBmPSQoIjxkaXYgLz4iKS5jc3MoImRpc3BsYXkiLCJpbmxpbmUtYmxvY2siKS5hcHBlbmRUbyh2KTtmb3IodmFyIFUgaW4gYikkKCI8aW5wdXQgLz4iKS5hdHRyKCJpZCIsYF8ke1V9YCkuYXR0cigidHlwZSIsInRleHQiKS5hdHRyKCJzdHlsZSIsIndpZHRoOjUycHgiKS5hZGRDbGFzcygicGxheWVyYXR0ciIpLmF0dHIoInBsYWNlaG9sZGVyIixVLnRvVXBwZXJDYXNlKCkpLmFwcGVuZFRvKGYpOyQoJzxzZWxlY3QgaWQ9ImNhcmQtdHlwZSIgc3R5bGU9ImhlaWdodDo0NnB4Ij5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9Ii5pdGVtIj48L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9Ii5jb21tb246bm90KC5jaGFtcGlvbnMpIj5Db21tb248L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9Ii5yYXJlOm5vdCguY2hhbXBpb25zKSI+UmFyZTwvb3B0aW9ucz5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9Ii5jb21tb24uY2hhbXBpb25zIj5VQ0wgQ29tbW9uPC9vcHRpb24+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPSIucmFyZS5jaGFtcGlvbnMiPlVDTCBSYXJlPC9vcHRpb24+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPSIrU2xhVlUiPkJST05aRTwvb3B0aW9uPlxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0iK1FrNTFVIj5CUk9OWkUgUkFSRTwvb3B0aW9uPlxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0iK2h0WjNVIj5TSUxWRVI8L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9IitoYzFYayI+U0lMVkVSIFJBUkU8L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9IitodFoxVSI+R09MRDwvb3B0aW9uPlxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0iK3drV1ZrIj5HT0xEIFJBUkU8L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9IitoY1ZibiI+U0lMVkVSIElGPC9vcHRpb24+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPSIraGRWZFgiPkdPTEQgSUY8L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9Iitoa1ozVSI+U2NyZWFtPC9vcHRpb24+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPSIraGxhVlUiPk1PVE08L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9IitoY1ZibiI+RkZTPC9vcHRpb24+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPSIraGRaM1giPlRPVEdTPC9vcHRpb24+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPSIrUWQ5M1giPlRPVFlOPC9vcHRpb24+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPSIraGNaYm4iPlRPVFk8L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9IitoY1ozbiI+SGVhZGxpbmVyPC9vcHRpb24+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPSIraGNaM1UiPlVDTCBMaXZlPC9vcHRpb24+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPSIrZ2RWZm4iPlVFTCBMaXZlPC9vcHRpb24+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPSIrQmM1M1UiPk9UVzwvb3B0aW9uPlxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0iK2dsWjNYIj5IZXJvZTwvb3B0aW9uPlxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0iK2djNVpIIj5JY29uPC9vcHRpb24+XG4gICAgICAgIDwvc2VsZWN0PlxuICAgICcpLmFwcGVuZFRvKGYpO2xldCBTPSQoJzxzZWxlY3QgaWQ9InNxdWFkRml0bmVzcyIgc3R5bGU9ImhlaWdodDo0NnB4Ij48b3B0aW9uIHZhbHVlPSIrMzAiPiszMDwvb3B0aW9uPjxvcHRpb24gdmFsdWU9IisyMCI+KzIwPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT0iKzEwIj4rMTA8L29wdGlvbj48L3NlbGVjdD4nKS5hcHBlbmRUbyh2KS5oaWRlKCksUD0kKCc8c2VsZWN0IGlkPSJjb250cmFjdHMiIHN0eWxlPSJoZWlnaHQ6NDZweCI+PG9wdGlvbiB2YWx1ZT0icmFyZSI+UmFyZTwvb3B0aW9uPjxvcHRpb24gdmFsdWU9ImNvbW1vbiI+Q29tbW9uPC9vcHRpb24+PC9zZWxlY3Q+JykuYXBwZW5kVG8odikuaGlkZSgpOyQuZWFjaChbJCgiI3NxdWFkRml0bmVzcyIpLCQoIiNjb250cmFjdHMiKSwkKCIjY2FyZC10eXBlIiksJCgiLnBsYXllcmF0dHIiKV0sZnVuY3Rpb24oKXskKHRoaXMpLmNoYW5nZSgoKT0+KCQoIi5saXN0RlVUSXRlbSIpLnJlbW92ZUNsYXNzKCJoaWRlIikucmVtb3ZlQXR0cigicHJvY2Vzc2VkIiksTCgicmVmaWx0ZXJpbmcgaXRlbXMiKSx2b2lkIE4oKSkpfSksKCgpPT57bGV0IHQ9KHQsbixvLGkpPT5gJHt0fSAuJHtpPyJpbiI6ImRlIn1jcmVtZW50LXZhbHVlOmFmdGVyIHsgZm9udC1zaXplOjEwcHg7IGRpc3BsYXk6YmxvY2s7IG1hcmdpbi10b3A6LTMwcHg7IGNvbnRlbnQ6ICdbICR7ZVtzW25dW29dXX0gXScgfWAsbj0oZSxuLG8pPT50KGAuc2VhcmNoLXByaWNlcyAucHJpY2UtZmlsdGVyOm50aC1jaGlsZCgke2V9KWAsInNlYXJjaCIsbixvKSxvPSh0LGUsbyk9PmAke24odCxlKX0ke24odCxvLCEwKX1gLGk9YFxuICAgICAgICAgICAgJHtvKDIsImRlY01pbkJpZCIsImluY01pbkJpZCIpfVxuICAgICAgICAgICAgJHtvKDMsImRlY01heEJpZCIsImluY01heEJpZCIpfVxuICAgICAgICAgICAgJHtvKDUsImRlY01pbkJ1eSIsImluY01pbkJ1eSIpfVxuICAgICAgICAgICAgJHtvKDYsImRlY01heEJ1eSIsImluY01heEJ1eSIpfVxuICAgICAgICAgICAgJHt0KCIuRGV0YWlsUGFuZWwgPiAuYmlkT3B0aW9ucyIsInJlc3VsdHMiLCJkZWNCaWQiLCExKX1cbiAgICAgICAgICAgICR7dCgiLkRldGFpbFBhbmVsID4gLmJpZE9wdGlvbnMiLCJyZXN1bHRzIiwiaW5jQmlkIiwhMCl9XG4gICAgICAgICAgICAudXQtbWFya2V0LXNlYXJjaC1maWx0ZXJzLXZpZXcgLmNhbGwtdG8tYWN0aW9uOmFmdGVyIHsgY29udGVudDogJ1sgJHtlW3Muc2VhcmNoLnNlYXJjaF19IF0nIH1cbiAgICAgICAgICAgIC51dC1uYXZpZ2F0aW9uLWJ1dHRvbi1jb250cm9sOmFmdGVyIHsgZm9udC1zaXplOjEwcHg7IGZsb2F0OnJpZ2h0OyBtYXJnaW4tcmlnaHQ6MTJweDsgY29udGVudDogJ1sgJHtlW3MuYmFja119IF0nIH1cbiAgICAgICAgICAgIC5wYWdpbmdDb250YWluZXIgLnByZXY6YWZ0ZXIgeyBmb250LXNpemU6IDEwcHg7IGRpc3BsYXk6YmxvY2s7IGNvbnRlbnQ6ICdbICR7ZVtzLmxpc3RzLnByZXZdfSBdJyB9XG4gICAgICAgICAgICAucGFnaW5nQ29udGFpbmVyIC5uZXh0OmFmdGVyIHsgZm9udC1zaXplOiAxMHB4OyBkaXNwbGF5OmJsb2NrOyBjb250ZW50OiAnWyAke2Vbcy5saXN0cy5uZXh0XX0gXScgfVxuICAgICAgICAgICAgLmJpZEJ1dHRvbjphZnRlciB7IGNvbnRlbnQ6ICcgWyAke2Vbcy5yZXN1bHRzLmJpZF19IF0nIH1cbiAgICAgICAgICAgIC5idXlCdXR0b246YmVmb3JlIHsgZmxvYXQ6cmlnaHQ7IG1hcmdpbi1sZWZ0OiAtNDBweDsgY29udGVudDogJyBbICR7ZVtzLnJlc3VsdHMuYnV5XX0gXScgfVxuICAgICAgICAgICAgYnV0dG9uLnV0LXRhYi1iYXItaXRlbS5pY29uLWhvbWUgeyBvcmRlcjogMCB9XG4gICAgICAgICAgICBidXR0b24udXQtdGFiLWJhci1pdGVtLmljb24tc3F1YWQgeyBvcmRlcjogMCB9XG4gICAgICAgICAgICBidXR0b24udXQtdGFiLWJhci1pdGVtLmljb24tc2JjIHsgb3JkZXI6IDEgfVxuICAgICAgICAgICAgYnV0dG9uLnV0LXRhYi1iYXItaXRlbS5pY29uLXRyYW5zZmVyIHsgb3JkZXI6IDIgfVxuICAgICAgICAgICAgYnV0dG9uLnV0LXRhYi1iYXItaXRlbS5pY29uLXN0b3JlIHsgb3JkZXI6IDIgfVxuICAgICAgICAgICAgYnV0dG9uLnV0LXRhYi1iYXItaXRlbS5pY29uLWNsdWIgeyBvcmRlcjogMiB9XG4gICAgICAgICAgICAuaGlkZSB7IGRpc3BsYXk6IG5vbmUgfVxuICAgICAgICAgICAgYDt2YXIgYT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCJzdHlsZSIpO2EudHlwZT0idGV4dC9jc3MiLGEuaW5uZXJUZXh0PWksZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChhKX0pKCksZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCJrZXlkb3duIix0PT57aWYodC5rZXlDb2RlPT1zLmVuYWJsZURpc2FibGUmJihuPSFuLCQoIiNwYWxldG9vbHMtc3RhdHVzIikuY3NzKCJjb2xvciIsbj8ibGltZSI6InJlZCIpLnRleHQobj8iT04iOiJPRkYiKSksbilpZih0LmtleUNvZGUhPXMuYmFjaylpZih0LmtleUNvZGUhPXMudGVjaCl0cnl7bGV0IGU9SSgpW3Qua2V5Q29kZV07ZSYmZSgpfWNhdGNoKHQpe0wodCl9ZWxzZSgoKT0+e2xldCB0PSQoIi5wYW5lbEFjdGlvbnMgLnBhbmVsQWN0aW9uUm93LmJvdWdodFByaWNlIik7aWYoMD09dC5sZW5ndGgpcmV0dXJuO2xldCBlPSQoIiN0ZWNoLWNvaW5zIik7MD09ZS5sZW5ndGgmJigkKCc8ZGl2IGNsYXNzPSJwYW5lbEFjdGlvblJvdyBib3VnaHRQcmljZSI+PHNwYW4+VGVjaDwvc3Bhbj48c3BhbiBpZD0idGVjaC1jb2lucyI+PC9zcGFuPjwvZGl2PicpLmluc2VydEFmdGVyKHQpLGU9JCgiI3RlY2gtY29pbnMiKSk7bGV0IG49cGFyc2VJbnQoJCgiLkRldGFpbFBhbmVsIC5ib3VnaHRQcmljZVZhbHVlIikudGV4dCgpLnJlcGxhY2UoIiwiLCIiKS5yZXBsYWNlKCIuIiwiIikpLG89bisxZTMqKE1hdGguZmxvb3Iobi8xZTQpLTEpKzM1MDA7ZS50ZXh0KG8pfSkoKTtlbHNlIE8oKX0pO2xldCBGPXQ9PiQoIm5hdi51dC10YWItYmFyIikuYXBwZW5kKGA8YnV0dG9uIGNsYXNzPSJ1dC10YWItYmFyLWl0ZW0iIHN0eWxlPSJvcmRlcjozIj4ke3R9PC9idXR0b24+YCkseT0odCxlLG4sbyk9PkYoYDxhIHN0eWxlPSJ0ZXh0LWRlY29yYXRpb246bm9uZTtjb2xvcjoke298fCJpbmhlcml0In07Y3Vyc29yOnBvaW50ZXI7Y3Vyc29yOmhhbmQiIHRhcmdldD0iJHtlfSIgaHJlZj0iJHt0fSI+JHtufTwvYT5gKTt5KCJodHRwOi8vZWFsbGVncmV0dGEuZ2l0aHViLmlvL3BhbGV0b29scy8iLCJwYWxldG9vbHMiLCdQYWxldG9vbHMgdjIuMC44IDxzcGFuIGlkPSJwYWxldG9vbHMtc3RhdHVzIiBzdHlsZT0iY29sb3I6bGltZSI+T048L3NwYW4+JykseSgiaHR0cHM6Ly90d2l0dGVyLmNvbS9GRlZBIiwidHdpdHRlciIsIkBGRlZBIiwiIzAwOTlGRjtmb250LXdlaWdodDpib2xkIiksRignPGZvcm0gaWQ9InBhbGV0b29scy1kb25hdGUiIGFjdGlvbj0iaHR0cHM6Ly93d3cucGF5cGFsLmNvbS9jZ2ktYmluL3dlYnNjciIgbWV0aG9kPSJwb3N0IiB0YXJnZXQ9Il9ibGFuayI+XG4gICAgPGlucHV0IHR5cGU9ImhpZGRlbiIgbmFtZT0iY21kIiB2YWx1ZT0iX2RvbmF0aW9ucyIgLz5cbiAgICA8aW5wdXQgdHlwZT0iaGlkZGVuIiBuYW1lPSJidXNpbmVzcyIgdmFsdWU9IlpBSlg2QUQ2WFBMUk4iIC8+XG4gICAgPGlucHV0IHR5cGU9ImhpZGRlbiIgbmFtZT0iY3VycmVuY3lfY29kZSIgdmFsdWU9IlVTRCIgLz5cbiAgICA8YSBzdHlsZT0idGV4dC1kZWNvcmF0aW9uOm5vbmU7Y29sb3I6aW5oZXJpdCIgb25jbGljaz0iamF2YXNjcmlwdDokKFwnI3BhbGV0b29scy1kb25hdGVcJylbMF0uc3VibWl0KCkiIGhyZWY9ImphdmFzY3JpcHQ6dm9pZCgwKSI+UGFsZXRvb2xzIERvbmF0ZTwvYT48L2Zvcm0+PC9hPicpLHkoImh0dHBzOi8vd3d3Lmllc2EtZ2xvYmFsLmNvbSIsImllc2EiLCc8aW1nIHNyYz0iZGF0YTppbWFnZS9qcGVnO2Jhc2U2NCwvOWovNEFBUVNrWkpSZ0FCQVFFQVlBQmdBQUQvNFFCbVJYaHBaZ0FBVFUwQUtnQUFBQWdBQkFFYUFBVUFBQUFCQUFBQVBnRWJBQVVBQUFBQkFBQUFSZ0VvQUFNQUFBQUJBQUlBQUFFeEFBSUFBQUFRQUFBQVRnQUFBQUFBQUFCZ0FBQUFBUUFBQUdBQUFBQUJjR0ZwYm5RdWJtVjBJRFF1TWk0eEFQL2JBRU1BRUFzTURnd0tFQTRORGhJUkVCTVlLQm9ZRmhZWU1TTWxIU2c2TXowOE9UTTROMEJJWEU1QVJGZEZOemhRYlZGWFgySm5hR2MrVFhGNWNHUjRYR1ZuWS8vYkFFTUJFUklTR0JVWUx4b2FMMk5DT0VKalkyTmpZMk5qWTJOalkyTmpZMk5qWTJOalkyTmpZMk5qWTJOalkyTmpZMk5qWTJOalkyTmpZMk5qWTJOalkyTmpZLy9BQUJFSUFFSUFRQU1CSWdBQ0VRRURFUUgveEFBZkFBQUJCUUVCQVFFQkFRQUFBQUFBQUFBQUFRSURCQVVHQndnSkNndi94QUMxRUFBQ0FRTURBZ1FEQlFVRUJBQUFBWDBCQWdNQUJCRUZFaUV4UVFZVFVXRUhJbkVVTW9HUm9RZ2pRckhCRlZMUjhDUXpZbktDQ1FvV0Z4Z1pHaVVtSnlncEtqUTFOamM0T1RwRFJFVkdSMGhKU2xOVVZWWlhXRmxhWTJSbFptZG9hV3B6ZEhWMmQzaDVlb09FaFlhSGlJbUtrcE9VbFphWG1KbWFvcU9rcGFhbnFLbXFzck8wdGJhM3VMbTZ3c1BFeGNiSHlNbkswdFBVMWRiWDJObmE0ZUxqNU9YbTUranA2dkh5OC9UMTl2ZjQrZnIveEFBZkFRQURBUUVCQVFFQkFRRUJBQUFBQUFBQUFRSURCQVVHQndnSkNndi94QUMxRVFBQ0FRSUVCQU1FQndVRUJBQUJBbmNBQVFJREVRUUZJVEVHRWtGUkIyRnhFeUl5Z1FnVVFwR2hzY0VKSXpOUzhCVmljdEVLRmlRMDRTWHhGeGdaR2lZbktDa3FOVFkzT0RrNlEwUkZSa2RJU1VwVFZGVldWMWhaV21Oa1pXWm5hR2xxYzNSMWRuZDRlWHFDZzRTRmhvZUlpWXFTazVTVmxwZVltWnFpbzZTbHBxZW9xYXF5czdTMXRyZTR1YnJDdzhURnhzZkl5Y3JTMDlUVjF0ZlkyZHJpNCtUbDV1Zm82ZXJ5OC9UMTl2ZjQrZnIvMmdBTUF3RUFBaEVERVFBL0FPYnFlMnNycTcvNDk3ZVdYM1JTYTJ0QXRyVk5PYStscy90ZHdiZ1FReHNjTGtnSG11b2owM1U3bEFMdS93RHNzZjhBenhzMUM0SHB1UE5WY1J5RWVtSnBVUDJyV1lXM0U0aHR0MkRJZlVrZEFLc1duaSs0dFUyTFkyZ1RQQVJTdVBhdHc2UGJhanJWd2w2MHNrVm5GR2lLejlRUVNTVDYxeEtwYkpxSVNSMmUxV1hCZGVwWFBYOHFBTktIVUl0V3VCYjZsYng3cG0ycFBFb1ZrSjZaOVI5YXJYdWhhalpTdXIyc3JJcE9KRVVsU1BXdHZ4VkZwRnZhd1Bwd2hXNTNyZ3hOeUZBNmtEOE9hMWRLVysxZlNyYTlYVUpZTGdBcWNLQ2o0SjVLK3RJRHo3cFJYZDNObWJ1NUZqckZuQ1pwVVpvYnUzK1VzUU80cmhLWWpzdkRscGNmMlRaa3dQajdlSmVWL2cyL2UrbGIrcTMxMWF6MnlXOER5SXpabFlJVzJya0R0MzV6K0ZZRjlkM01PcjZKREZQSWtUd3hia1ZpQWVlNHJQc1k5YzFXZTUreVg4b0VUNElhWmgxSnhqOHFReldGM3FNaXRMTnA2dElTVkwvWlNXWmNjTGpQUTgvbDcxWGwrMUtybVBTWUhZTzRDL1lpUGxBNE9mNlZMWmFQNGppdllKSjc0dEVyZ3V2bnNjalBQRlZXajFuVmRjMUNLenYzaVNDUWptVXFBTWtBQUQ2VUFYVGJUSkt3ZXl0V1ZaVlRLMlBVRVpKL0RwVDdQVXRWdDdlTlRwL2xxSFhLUndFQUpqTFk5OG4rZFZ2N0E4U2Y5QmIvQU1qdi9oUWRBOFNZL3dDUXJuL3R1LzhBaFFCdTZpUi9iR2xuL3JyL0FPZ1Y1Z2VwcnI5SjFtN3R0UmJTOWFiTGNva3JqSlJpTURudURuclhNNmpZemFiZXlXczQrWkR3ZXpEc1JUUUhSYW4vQU1oM1FmOEFyakQvQU9oVm5hYllSWHR4ZCtacWEyUldUZ01jYnVUN2l0U0xVTkV2cHRPdUxtZTRpdWJkRVFLQjh1UWU1eDB6VDlSMHJRQkxQUGNTWFZ0aVlvNkx5QTNYMFBCSElwQU10dEd0b0xtS1krSVltRWJodHU0YzRQVDcxTGVhTFozTjljWEthN0JINXpsOW9JNHlmOTZvUDdMOE0vWmZ0UDI2NzhyZjVlN0g4V000Kzc2VVRhWDRaZ1NKNUw2N0N6SnZUanFNa2YzZmFnQ2hyRmltblJSdkJxeTNUTzJDcU4wSHIxTlg3RzQ4dnhWWXROTnNqRnVoWXMyQi9xcW5pMGJ3NHVxTFptNXVaSncyREUzUW5yaklIOWFTNnQ5QjFyVXQ4ZW9TbzdxQUVXSWdBS1BjY0RBb0F0ZUxiV3kxRzErMVc5ekFibUVkQklNdXZwOWF6SVdIaVRTUHM3a2YybFpybU5qL0FNdFU5UHIvQUo5YUxqUmRDdFVoYWJVNTFFeWIwL2Q4bGZYcFJCZDZOb2lUVDZmY1RYVjI2RkUzTHRDWjc5S0FPYXJ1dnNkcnFXa1c5eExleG9rMEFpbForTXV2M1Q5UWNqM0ZjTFd4b2VzeGFla2tGM2IvQUdtM1k3bFQrNjJNWkg0R21Cci9BUENQd2YyT2JYKzFiYmlmelMvYjd1TWRhTDNRSUxsTFNIKzFyWlh0NC9LSVBVbmNmZjN4V2haWCttYWhhRVdGbEU4MzhWczdCR3h6MDdIcWZ6cC8ydlMwSUZ6cGM4TXdQM0dnTFpQc1J3ZWxJQ3VOSGhYeENkU09wVytONWJ5Ky93QjArL3NmeXF2cG5oeTNqZDQxMUtDV1NYNVNFNjdQNGdPZXA2WjlNMW9oN0lscmk2MHhiVzJIUG0zREJXSjlsNU9heHIveExZTEZNbW0yUmptSUtwTjB3RHdUK1ZBR1I0a25TNDF1NE1UN29rSVJPTUFBREdCN1ZtVVVVeEJSUlJRQUFsU0NDUVIwSXJ0L0QxMWNTYVRNMGs4cnNxOEZuSklvb29ZMGNqZnp6VDNUR2FWNUNEZ0YySngrZFZxS0tCQlJSUlFCLzlrPSIgYWx0PSIiIC8+Jyl9KCk7"