window.paletools = window.paletools || {};
window.paletools['paletools-min'] = "IWZ1bmN0aW9uKGUpe2NvbnN0IHQ9WyIiLCIiLCIiLCJDQU5DRUwiLCIiLCIiLCJIRUxQIiwiIiwiQkFDS19TUEFDRSIsIlRBQiIsIiIsIiIsIkNMRUFSIiwiRU5URVIiLCJFTlRFUl9TUEVDSUFMIiwiIiwiU0hJRlQiLCJDT05UUk9MIiwiQUxUIiwiUEFVU0UiLCJDQVBTX0xPQ0siLCJLQU5BIiwiRUlTVSIsIkpVTkpBIiwiRklOQUwiLCJIQU5KQSIsIiIsIkVTQ0FQRSIsIkNPTlZFUlQiLCJOT05DT05WRVJUIiwiQUNDRVBUIiwiTU9ERUNIQU5HRSIsIlNQQUNFIiwiUEFHRV9VUCIsIlBBR0VfRE9XTiIsIkVORCIsIkhPTUUiLCJMRUZUIiwiVVAiLCJSSUdIVCIsIkRPV04iLCJTRUxFQ1QiLCJQUklOVCIsIkVYRUNVVEUiLCJQUklOVFNDUkVFTiIsIklOU0VSVCIsIkRFTEVURSIsIiIsIjAiLCIxIiwiMiIsIjMiLCI0IiwiNSIsIjYiLCI3IiwiOCIsIjkiLCJDT0xPTiIsIlNFTUlDT0xPTiIsIkxFU1NfVEhBTiIsIkVRVUFMUyIsIkdSRUFURVJfVEhBTiIsIlFVRVNUSU9OX01BUksiLCJBVCIsIkEiLCJCIiwiQyIsIkQiLCJFIiwiRiIsIkciLCJIIiwiSSIsIkoiLCJLIiwiTCIsIk0iLCJOIiwiTyIsIlAiLCJRIiwiUiIsIlMiLCJUIiwiVSIsIlYiLCJXIiwiWCIsIlkiLCJaIiwiT1NfS0VZIiwiIiwiQ09OVEVYVF9NRU5VIiwiIiwiU0xFRVAiLCJOVU1QQUQwIiwiTlVNUEFEMSIsIk5VTVBBRDIiLCJOVU1QQUQzIiwiTlVNUEFENCIsIk5VTVBBRDUiLCJOVU1QQUQ2IiwiTlVNUEFENyIsIk5VTVBBRDgiLCJOVU1QQUQ5IiwiTVVMVElQTFkiLCJBREQiLCJTRVBBUkFUT1IiLCJTVUJUUkFDVCIsIkRFQ0lNQUwiLCJESVZJREUiLCJGMSIsIkYyIiwiRjMiLCJGNCIsIkY1IiwiRjYiLCJGNyIsIkY4IiwiRjkiLCJGMTAiLCJGMTEiLCJGMTIiLCJGMTMiLCJGMTQiLCJGMTUiLCJGMTYiLCJGMTciLCJGMTgiLCJGMTkiLCJGMjAiLCJGMjEiLCJGMjIiLCJGMjMiLCJGMjQiLCIiLCIiLCIiLCIiLCIiLCIiLCIiLCIiLCJOVU1fTE9DSyIsIlNDUk9MTF9MT0NLIiwiV0lOX09FTV9GSl9KSVNITyIsIldJTl9PRU1fRkpfTUFTU0hPVSIsIldJTl9PRU1fRkpfVE9VUk9LVSIsIldJTl9PRU1fRkpfTE9ZQSIsIldJTl9PRU1fRkpfUk9ZQSIsIiIsIiIsIiIsIiIsIiIsIiIsIiIsIiIsIiIsIkNJUkNVTUZMRVgiLCJFWENMQU1BVElPTiIsIkRPVUJMRV9RVU9URSIsIkhBU0giLCJET0xMQVIiLCJQRVJDRU5UIiwiQU1QRVJTQU5EIiwiVU5ERVJTQ09SRSIsIk9QRU5fUEFSRU4iLCJDTE9TRV9QQVJFTiIsIkFTVEVSSVNLIiwiUExVUyIsIlBJUEUiLCJIWVBIRU5fTUlOVVMiLCJPUEVOX0NVUkxZX0JSQUNLRVQiLCJDTE9TRV9DVVJMWV9CUkFDS0VUIiwiVElMREUiLCIiLCIiLCIiLCIiLCJWT0xVTUVfTVVURSIsIlZPTFVNRV9ET1dOIiwiVk9MVU1FX1VQIiwiIiwiIiwiU0VNSUNPTE9OIiwiRVFVQUxTIiwiQ09NTUEiLCJNSU5VUyIsIlBFUklPRCIsIlNMQVNIIiwiQkFDS19RVU9URSIsIiIsIiIsIiIsIiIsIiIsIiIsIiIsIiIsIiIsIiIsIiIsIiIsIiIsIiIsIiIsIiIsIiIsIiIsIiIsIiIsIiIsIiIsIiIsIiIsIiIsIiIsIk9QRU5fQlJBQ0tFVCIsIkJBQ0tfU0xBU0giLCJDTE9TRV9CUkFDS0VUIiwiUVVPVEUiLCIiLCJNRVRBIiwiQUxUR1IiLCIiLCJXSU5fSUNPX0hFTFAiLCJXSU5fSUNPXzAwIiwiIiwiV0lOX0lDT19DTEVBUiIsIiIsIiIsIldJTl9PRU1fUkVTRVQiLCJXSU5fT0VNX0pVTVAiLCJXSU5fT0VNX1BBMSIsIldJTl9PRU1fUEEyIiwiV0lOX09FTV9QQTMiLCJXSU5fT0VNX1dTQ1RSTCIsIldJTl9PRU1fQ1VTRUwiLCJXSU5fT0VNX0FUVE4iLCJXSU5fT0VNX0ZJTklTSCIsIldJTl9PRU1fQ09QWSIsIldJTl9PRU1fQVVUTyIsIldJTl9PRU1fRU5MVyIsIldJTl9PRU1fQkFDS1RBQiIsIkFUVE4iLCJDUlNFTCIsIkVYU0VMIiwiRVJFT0YiLCJQTEFZIiwiWk9PTSIsIiIsIlBBMSIsIldJTl9PRU1fQ0xFQVIiLCIiXTtsZXQgbj0hMCxpPW5ldyBEYXRlLG89bnVsbCxhPW51bGw7ZT0kLmV4dGVuZCh7YmFjazo0OSxlbmFibGVEaXNhYmxlOjkyLHRlY2g6ODQsbGlzdHM6e3VwOjM4LGRvd246NDAscHJldjozNyxuZXh0OjM5fSxzZWFyY2g6e2RlY01pbkJpZDozNyxpbmNNaW5CaWQ6MzksZGVjTWF4QmlkOjM1LGluY01heEJpZDozNixkZWNNaW5CdXk6NDYsaW5jTWluQnV5OjM0LGRlY01heEJ1eTo0MCxpbmNNYXhCdXk6Mzgsc2VhcmNoOjUwfSxyZXN1bHRzOntiaWQ6NTIsYnV5OjUxLHRyYW5zZmVyOjgyLGNsdWI6NjcscHJlc3NFbnRlcjohMCxhdXRvQnV5OiExLHByZXZlbnRCYWNrOiEwLHNlbGw6ODEsZGVjQmlkOjQ2LGluY0JpZDozNH19LGV8fHt9KTtjb25zdCBzPXdpbmRvdy5NdXRhdGlvbk9ic2VydmVyfHx3aW5kb3cuV2ViS2l0TXV0YXRpb25PYnNlcnZlcixsPWUscj13aW5kb3cuc2VydmljZXMuTG9jYWxpemF0aW9uLGM9d2luZG93LnNlcnZpY2VzLkxvY2FsaXphdGlvbi5sb2NhbGl6ZSgic2VhcmNoLmZpbHRlcnMucGxheWVycyIpLEE9d2luZG93LnNlcnZpY2VzLkxvY2FsaXphdGlvbi5sb2NhbGl6ZSgiY2FyZC50aXRsZS5zcXVhZGZpdG5lc3MiKSxwPXdpbmRvdy5zZXJ2aWNlcy5Mb2NhbGl6YXRpb24ubG9jYWxpemUoImNhcmQudGl0bGUuY29udHJhY3QiKSx1PShlLHQpPT57bGV0IG49bmV3IHMoZnVuY3Rpb24oZSxuKXsoZVswXS5hZGRlZE5vZGVzLmxlbmd0aHx8ZVswXS5yZW1vdmVkTm9kZXMubGVuZ3RoKSYmdCgpfSk7cmV0dXJuIG4ub2JzZXJ2ZShlLHtjaGlsZExpc3Q6ITAsc3VidHJlZTohMH0pLG59LGQ9KGUsdCk9PntpZigwPT1lLmxlbmd0aClyZXR1cm4hMTtjb25zdCBuPWRvY3VtZW50LmNyZWF0ZUV2ZW50KCJNb3VzZUV2ZW50cyIpO3JldHVybiBuLmluaXRFdmVudCh0KSxlWzBdLmRpc3BhdGNoRXZlbnQobiksITB9LEU9ZT0+KGU9PmQoZSwibW91c2Vkb3duIikpKGUpJiYoZT0+ZChlLCJtb3VzZXVwIikpKGUpLGg9KGUsdCk9PiQoIi5wbGF5ZXItc3RhdHMtZGF0YS1jb21wb25lbnQgLnZhbHVlIixlKVt0XS50ZXh0Q29udGVudCxiPXtvdnI6ZT0+JCgiLnJhdGluZyIsZSlbMF0udGV4dENvbnRlbnQscGFjOmU9PmgoZSwwKSxzaG86ZT0+aChlLDEpLHBhczplPT5oKGUsMiksZHJpOmU9PmgoZSwzKSxkZWY6ZT0+aChlLDQpLHBoeTplPT5oKGUsNSl9LE49JCgiLnV0LWZpZmEtaGVhZGVyLXZpZXciKSxNPWU9PntpZigwPT0oZT1lfHwkKCIuU2VhcmNoUmVzdWx0cyIpKS5sZW5ndGgpcmV0dXJuO2xldCB0PSQoIi5saXN0RlVUSXRlbSIsZSk7aWYoMD09dC5sZW5ndGh8fHQuZmlsdGVyKCdbcHJvY2Vzc2VkPSJ0cnVlIl0nKS5sZW5ndGg+MClyZXR1cm47bGV0IG49JCgiI3NxdWFkRml0bmVzcyIpLnZhbCgpLGk9JCgiI2NvbnRyYWN0cyIpLnZhbCgpO3QuZWFjaCgoZSx0KT0+e2xldCBvPSQodCksYT0hMTtpZihvLmF0dHIoInByb2Nlc3NlZCIsInRydWUiKSwicGxheWVyIj09PVApaWYoMD09KGU9PiQoJCgiI2NhcmQtdHlwZSIpLnZhbCgpLGUpLmxlbmd0aCkodCkpYT0hMDtlbHNlIGZvcih2YXIgcyBpbiBiKXtsZXQgZT0kLnRyaW0oJChgI18ke3N9YCkudmFsKCkpO2lmKCFlKWNvbnRpbnVlO2xldCBuPXBhcnNlSW50KGUpLGk9cGFyc2VJbnQoYltzXSh0KSk7aWYobjwwJiZpPk1hdGguYWJzKG4pP2E9ITA6IisiPT1lLmNoYXJBdCgwKSYmaTxuP2E9ITA6biE9aSYmKGE9ITApLGEpYnJlYWt9ZWxzZSgiZml0bmVzcyI9PT1QJiYoZT0+JChgLm5hbWU6Y29udGFpbnMoJHtBfSlgLGUpLmxlbmd0aD4wPyQoIi5zdWJ0eXBlIixlKVswXS50ZXh0Q29udGVudDpudWxsKSh0KSE9bnx8ImNvbnRyYWN0cyI9PT1QJiYoZT0+JCgiLmNvbnRyYWN0cyIsZSkuaGFzQ2xhc3MoInJhcmUiKT8icmFyZSI6ImNvbW1vbiIpKHQpIT1pKSYmKGE9ITApO28uYWRkQ2xhc3MoYT8iaGlkZSI6InNob3ciKX0pLCh0PSQoIi5saXN0RlVUSXRlbS5zaG93IixlKSkubGVuZ3RoPjAmJnNldFRpbWVvdXQoZnVuY3Rpb24oKXtFKHQpfSwwKSxmaWx0ZXJMaXN0PSExfSxtPSgpPT57bGV0IGU9JCgiLmRpYWxvZy1ib2R5IC51dC1idXR0b24tZ3JvdXAgYnV0dG9uOmVxKDApIik7RShlKT9JKCk6c2V0VGltZW91dChtLDEwKX0sdj0oKT0+e2xldCBlPSQoIi5TZWFyY2hSZXN1bHRzIik7MCE9ZS5sZW5ndGg/KGYoInNldCBpdGVtcyBmaWx0ZXIgLSBjb250YWluZXIgZm91bmQiKSxhJiZhLmRpc2Nvbm5lY3QoKSxNKGUpLG8mJm8uZGlzY29ubmVjdCgpLG89dShlWzBdLCgpPT57TShlKX0pKTpmKCJzZXQgaXRlbXMgZmlsdGVyIC0gbm8gY29udGFpbmVyIil9LE89KCk9PntuZXcgRGF0ZS1pPDUwMHx8KGk9bmV3IERhdGUsRSgkKCIudXQtbmF2aWdhdGlvbi1idXR0b24tY29udHJvbCIpKXx8c2V0VGltZW91dChPLDEwKSl9LFQ9KCk9PiQoYC51dC1idXR0b24tZ3JvdXAgPiBidXR0b246Y29udGFpbnMoJyR7ci5sb2NhbGl6ZSgiaW5mb3BhbmVsLmxhYmVsLnNlbmRUcmFkZVBpbGUiKX0nKWApLGc9KCk9PiQoYC51dC1idXR0b24tZ3JvdXAgPiBidXR0b246Y29udGFpbnMoJyR7ci5sb2NhbGl6ZSgiaW5mb3BhbmVsLmxhYmVsLnN0b3JlSW5DbHViIil9JylgKSxDPSgpPT4kKGAudXQtYnV0dG9uLWdyb3VwID4gYnV0dG9uOmNvbnRhaW5zKCcke3IubG9jYWxpemUoImluZm9wYW5lbC5sYWJlbC5kaXNjYXJkIil9JylgKSxCPSgpPT57dHJ5e2xldCBlPXt9O2lmKCQoIi51dC1tYXJrZXQtc2VhcmNoLWZpbHRlcnMtdmlldyIpLmxlbmd0aD4wKWVbbC5zZWFyY2guZGVjTWluQmlkXT0oKCk9PkUoJCgiLmRlY3JlbWVudC12YWx1ZSIpKSksZVtsLnNlYXJjaC5pbmNNaW5CaWRdPSgoKT0+RSgkKCIuaW5jcmVtZW50LXZhbHVlIikpKSxlW2wuc2VhcmNoLmRlY01heEJpZF09KCgpPT5FKCQoIi5kZWNyZW1lbnQtdmFsdWU6ZXEoMSkiKSkpLGVbbC5zZWFyY2guaW5jTWF4QmlkXT0oKCk9PkUoJCgiLmluY3JlbWVudC12YWx1ZTplcSgxKSIpKSksZVtsLnNlYXJjaC5kZWNNaW5CdXldPSgoKT0+RSgkKCIuZGVjcmVtZW50LXZhbHVlOmVxKDIpIikpKSxlW2wuc2VhcmNoLmluY01pbkJ1eV09KCgpPT5FKCQoIi5pbmNyZW1lbnQtdmFsdWU6ZXEoMikiKSkpLGVbbC5zZWFyY2guZGVjTWF4QnV5XT0oKCk9PkUoJCgiLmRlY3JlbWVudC12YWx1ZTplcSgzKSIpKSksZVtsLnNlYXJjaC5pbmNNYXhCdXldPSgoKT0+RSgkKCIuaW5jcmVtZW50LXZhbHVlOmVxKDMpIikpKSxlW2wuc2VhcmNoLnNlYXJjaF09KCgpPT4oKCk9PntFKCQoIi5idXR0b24tY29udGFpbmVyIC5idG4tc3RhbmRhcmQuY2FsbC10by1hY3Rpb24iKSk7bGV0IGU9JCgiLnV0LW5hdmlnYXRpb24tY29udGFpbmVyLXZpZXctLWNvbnRlbnQiKTthPXUoZVswXSwoKT0+e3YoKX0pfSkoKSk7ZWxzZXtsZXQgdD0kKCIubGlzdEZVVEl0ZW0uc2hvdyIpLG49dC5sZW5ndGg+MCxpPXQucGFyZW50cygiLnBhZ2luYXRlZCwgLnV0LXdhdGNoLWxpc3QtdmlldywgLnV0LXRyYW5zZmVyLWxpc3QtdmlldyIpO2lmKDA9PWkubGVuZ3RoJiYoaT10LnBhcmVudCgpKSxuJiYkKCIuRGV0YWlsUGFuZWwgPiAuYmlkT3B0aW9ucyIpLmxlbmd0aD4wJiYoZVtsLnJlc3VsdHMuYmlkXT0oKCk9PkUoJCgiLmJpZEJ1dHRvbiIpKSksZVtsLnJlc3VsdHMuYnV5XT0oKCk9PnZvaWQoRSgkKCIuYnV5QnV0dG9uIikpJiZsLnJlc3VsdHMucHJlc3NFbnRlciYmbSgpKSksZVtsLnJlc3VsdHMuZGVjQmlkXT0oKCk9PkUoJCgiLmJpZE9wdGlvbnMgLmRlY3JlbWVudC12YWx1ZSIpKSksZVtsLnJlc3VsdHMuaW5jQmlkXT0oKCk9PkUoJCgiLmJpZE9wdGlvbnMgLmluY3JlbWVudC12YWx1ZSIpKSkpLG4mJiQoIi5EZXRhaWxQYW5lbCA+IC51dC1idXR0b24tZ3JvdXAiKS5sZW5ndGg+MCYmKGVbbC5yZXN1bHRzLnRyYW5zZmVyXT0oKCk9PkUoVCgpKSksZVtsLnJlc3VsdHMuY2x1Yl09KCgpPT5FKGcoKSkpLGVbbC5yZXN1bHRzLnNlbGxdPSgoKT0+RShDKCkpKSksbil7bGV0IHQ9JCgiLmxpc3RGVVRJdGVtLnNlbGVjdGVkIixpKTtlW2wubGlzdHMudXBdPSgoKT0+e2xldCBlPXQucHJldigpO2Zvcig7MT09ZS5sZW5ndGgmJiFlLmhhc0NsYXNzKCJzaG93Iik7KWU9ZS5wcmV2KCk7MCE9ZS5sZW5ndGgmJihFKGUpLGkuY3NzKCJwb3NpdGlvbiIsInJlbGF0aXZlIikuc2Nyb2xsVG9wKGkuc2Nyb2xsVG9wKCkrZS5wb3NpdGlvbigpLnRvcC1lLmhlaWdodCgpKSl9KSxlW2wubGlzdHMuZG93bl09KCgpPT57bGV0IGU9dC5uZXh0KCk7Zm9yKDsxPT1lLmxlbmd0aCYmIWUuaGFzQ2xhc3MoInNob3ciKTspZT1lLm5leHQoKTswIT1lLmxlbmd0aCYmKEUoZSksaS5jc3MoInBvc2l0aW9uIiwicmVsYXRpdmUiKS5zY3JvbGxUb3AoaS5zY3JvbGxUb3AoKStlLnBvc2l0aW9uKCkudG9wLWUuaGVpZ2h0KCkpKX0pfSQoIi5wYWdpbmdDb250YWluZXIiKS5sZW5ndGg+MCYmKGVbbC5saXN0cy5wcmV2XT0oKCk9PkUoJCgiLnBhZ2luZ0NvbnRhaW5lciAucHJldjp2aXNpYmxlIikpKSxlW2wubGlzdHMubmV4dF09KCgpPT5FKCQoIi5wYWdpbmdDb250YWluZXIgLm5leHQ6dmlzaWJsZSIpKSkpfXJldHVybiBlfWNhdGNoKGUpe2YoZSl9fSxJPSgpPT57dmFyIGU9VCgpO2lmKDA9PWUubGVuZ3RoKXJldHVybiB2b2lkIHNldFRpbWVvdXQoSSw1MCk7bGV0IG49KGUsbik9PntpZighZSlyZXR1cm47bGV0IGk9YCBbICR7dFtsLnJlc3VsdHNbbl1dfSBdYCxvPWUuaHRtbCgpO28mJi0xPT1vLmluZGV4T2YoaSkmJmUuaHRtbChlLmh0bWwoKStpKX07bihlLCJ0cmFuc2ZlciIpLG4oZygpLCJjbHViIiksbihDKCksInNlbGwiKX0sZj1lPT57fTtsZXQgUD0icGxheWVyIjskKGA8c2VsZWN0IHN0eWxlPSJoZWlnaHQ6NDZweCI+PG9wdGlvbiB2YWx1ZT0icGxheWVyIj4ke2N9PC9vcHRpb24+PG9wdGlvbiB2YWx1ZT0iZml0bmVzcyI+JHtBfTwvb3B0aW9uPjxvcHRpb24gdmFsdWU9ImNvbnRyYWN0cyI+JHtwfTwvb3B0aW9uPjwvc2VsZWN0PmApLmNoYW5nZShmdW5jdGlvbigpe1A9dGhpcy52YWx1ZSxMLmhpZGUoKSxTLmhpZGUoKSxGLmhpZGUoKSwicGxheWVyIj09dGhpcy52YWx1ZT9MLnNob3coKToiZml0bmVzcyI9PT10aGlzLnZhbHVlP1Muc2hvdygpOiJjb250cmFjdHMiPT09dGhpcy52YWx1ZSYmRi5zaG93KCl9KS5hcHBlbmRUbyhOKTtsZXQgTD0kKCI8ZGl2IC8+IikuY3NzKCJkaXNwbGF5IiwiaW5saW5lLWJsb2NrIikuYXBwZW5kVG8oTik7Zm9yKHZhciBSIGluIGIpJCgiPGlucHV0IC8+IikuYXR0cigiaWQiLGBfJHtSfWApLmF0dHIoInR5cGUiLCJ0ZXh0IikuYXR0cigic3R5bGUiLCJ3aWR0aDo1MnB4IikuYWRkQ2xhc3MoInBsYXllcmF0dHIiKS5hdHRyKCJwbGFjZWhvbGRlciIsUi50b1VwcGVyQ2FzZSgpKS5hcHBlbmRUbyhMKTskKCc8c2VsZWN0IGlkPSJjYXJkLXR5cGUiIHN0eWxlPSJoZWlnaHQ6NDZweCI+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPSIuaXRlbSI+PC9vcHRpb24+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPSIuY29tbW9uOm5vdCguY2hhbXBpb25zKSI+Q29tbW9uPC9vcHRpb24+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPSIucmFyZTpub3QoLmNoYW1waW9ucykiPlJhcmU8L29wdGlvbnM+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPSIuY29tbW9uLmNoYW1waW9ucyI+VUNMIENvbW1vbjwvb3B0aW9uPlxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0iLnJhcmUuY2hhbXBpb25zIj5VQ0wgUmFyZTwvb3B0aW9uPlxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cJy5zcGVjaWFscyAucGxheWVyT3ZlcnZpZXdbc3R5bGU9ImNvbG9yOiByZ2IoMjU1LCAyMjYsIDE0MCk7Il1cJz5Hb2xkIElGPC9vcHRpb24+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwnLnNwZWNpYWxzIC5wbGF5ZXJPdmVydmlld1tzdHlsZT0iY29sb3I6IHJnYigyNDIsIDI0MiwgMjQzKTsiXVwnPlNpbHZlciBJRjwvb3B0aW9uPlxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cJy5zcGVjaWFscyAucGxheWVyT3ZlcnZpZXdbc3R5bGU9ImNvbG9yOiByZ2IoMjUyLCA4NCwgOTcpOyJdXCc+T1RXPC9vcHRpb24+XG4gICAgICAgIDwvc2VsZWN0PlxuICAgICcpLmFwcGVuZFRvKEwpO2xldCBTPSQoJzxzZWxlY3QgaWQ9InNxdWFkRml0bmVzcyIgc3R5bGU9ImhlaWdodDo0NnB4Ij48b3B0aW9uIHZhbHVlPSIrMzAiPiszMDwvb3B0aW9uPjxvcHRpb24gdmFsdWU9IisyMCI+KzIwPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT0iKzEwIj4rMTA8L29wdGlvbj48L3NlbGVjdD4nKS5hcHBlbmRUbyhOKS5oaWRlKCksRj0kKCc8c2VsZWN0IGlkPSJjb250cmFjdHMiIHN0eWxlPSJoZWlnaHQ6NDZweCI+PG9wdGlvbiB2YWx1ZT0icmFyZSI+UmFyZTwvb3B0aW9uPjxvcHRpb24gdmFsdWU9ImNvbW1vbiI+Q29tbW9uPC9vcHRpb24+PC9zZWxlY3Q+JykuYXBwZW5kVG8oTikuaGlkZSgpOyQuZWFjaChbJCgiI3NxdWFkRml0bmVzcyIpLCQoIiNjb250cmFjdHMiKSwkKCIjY2FyZC10eXBlIiksJCgiLnBsYXllcmF0dHIiKV0sZnVuY3Rpb24oKXskKHRoaXMpLmNoYW5nZSgoKT0+KCQoIi5saXN0RlVUSXRlbSIpLnJlbW92ZUNsYXNzKCJoaWRlIikucmVtb3ZlQXR0cigicHJvY2Vzc2VkIiksZigicmVmaWx0ZXJpbmcgaXRlbXMiKSx2b2lkIE0oKSkpfSksKCgpPT57bGV0IGU9KGUsbixpLG8pPT5gJHtlfSAuJHtvPyJpbiI6ImRlIn1jcmVtZW50LXZhbHVlOmFmdGVyIHsgZm9udC1zaXplOjEwcHg7IGRpc3BsYXk6YmxvY2s7IG1hcmdpbi10b3A6LTMwcHg7IGNvbnRlbnQ6ICdbICR7dFtsW25dW2ldXX0gXScgfWAsbj0odCxuLGkpPT5lKGAuc2VhcmNoLXByaWNlcyAucHJpY2UtZmlsdGVyOm50aC1jaGlsZCgke3R9KWAsInNlYXJjaCIsbixpKSxpPShlLHQsaSk9PmAke24oZSx0KX0ke24oZSxpLCEwKX1gLG89YFxuICAgICAgICAgICAgJHtpKDIsImRlY01pbkJpZCIsImluY01pbkJpZCIpfVxuICAgICAgICAgICAgJHtpKDMsImRlY01heEJpZCIsImluY01heEJpZCIpfVxuICAgICAgICAgICAgJHtpKDUsImRlY01pbkJ1eSIsImluY01pbkJ1eSIpfVxuICAgICAgICAgICAgJHtpKDYsImRlY01heEJ1eSIsImluY01heEJ1eSIpfVxuICAgICAgICAgICAgJHtlKCIuRGV0YWlsUGFuZWwgPiAuYmlkT3B0aW9ucyIsInJlc3VsdHMiLCJkZWNCaWQiLCExKX1cbiAgICAgICAgICAgICR7ZSgiLkRldGFpbFBhbmVsID4gLmJpZE9wdGlvbnMiLCJyZXN1bHRzIiwiaW5jQmlkIiwhMCl9XG4gICAgICAgICAgICAudXQtbWFya2V0LXNlYXJjaC1maWx0ZXJzLXZpZXcgLmNhbGwtdG8tYWN0aW9uOmFmdGVyIHsgY29udGVudDogJ1sgJHt0W2wuc2VhcmNoLnNlYXJjaF19IF0nIH1cbiAgICAgICAgICAgIC51dC1uYXZpZ2F0aW9uLWJ1dHRvbi1jb250cm9sOmFmdGVyIHsgZm9udC1zaXplOjEwcHg7IGZsb2F0OnJpZ2h0OyBtYXJnaW4tcmlnaHQ6MTJweDsgY29udGVudDogJ1sgJHt0W2wuYmFja119IF0nIH1cbiAgICAgICAgICAgIC5wYWdpbmdDb250YWluZXIgLnByZXY6YWZ0ZXIgeyBmb250LXNpemU6IDEwcHg7IGRpc3BsYXk6YmxvY2s7IGNvbnRlbnQ6ICdbICR7dFtsLmxpc3RzLnByZXZdfSBdJyB9XG4gICAgICAgICAgICAucGFnaW5nQ29udGFpbmVyIC5uZXh0OmFmdGVyIHsgZm9udC1zaXplOiAxMHB4OyBkaXNwbGF5OmJsb2NrOyBjb250ZW50OiAnWyAke3RbbC5saXN0cy5uZXh0XX0gXScgfVxuICAgICAgICAgICAgLmJpZEJ1dHRvbjphZnRlciB7IGNvbnRlbnQ6ICcgWyAke3RbbC5yZXN1bHRzLmJpZF19IF0nIH1cbiAgICAgICAgICAgIC5idXlCdXR0b246YmVmb3JlIHsgZmxvYXQ6cmlnaHQ7IG1hcmdpbi1sZWZ0OiAtNDBweDsgY29udGVudDogJyBbICR7dFtsLnJlc3VsdHMuYnV5XX0gXScgfVxuICAgICAgICAgICAgYnV0dG9uLnV0LXRhYi1iYXItaXRlbS5pY29uLWhvbWUgeyBvcmRlcjogMCB9XG4gICAgICAgICAgICBidXR0b24udXQtdGFiLWJhci1pdGVtLmljb24tc3F1YWQgeyBvcmRlcjogMCB9XG4gICAgICAgICAgICBidXR0b24udXQtdGFiLWJhci1pdGVtLmljb24tc2JjIHsgb3JkZXI6IDEgfVxuICAgICAgICAgICAgYnV0dG9uLnV0LXRhYi1iYXItaXRlbS5pY29uLXRyYW5zZmVyIHsgb3JkZXI6IDIgfVxuICAgICAgICAgICAgYnV0dG9uLnV0LXRhYi1iYXItaXRlbS5pY29uLXN0b3JlIHsgb3JkZXI6IDIgfVxuICAgICAgICAgICAgYnV0dG9uLnV0LXRhYi1iYXItaXRlbS5pY29uLWNsdWIgeyBvcmRlcjogMiB9XG4gICAgICAgICAgICAuaGlkZSB7IGRpc3BsYXk6IG5vbmUgfVxuICAgICAgICAgICAgYDt2YXIgYT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCJzdHlsZSIpO2EudHlwZT0idGV4dC9jc3MiLGEuaW5uZXJUZXh0PW8sZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChhKX0pKCksZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCJrZXlkb3duIixlPT57aWYoZS5rZXlDb2RlPT1sLmVuYWJsZURpc2FibGUmJihuPSFuLCQoIiNwYWxldG9vbHMtc3RhdHVzIikuY3NzKCJjb2xvciIsbj8ibGltZSI6InJlZCIpLnRleHQobj8iT04iOiJPRkYiKSksbilpZihlLmtleUNvZGUhPWwuYmFjaylpZihlLmtleUNvZGUhPWwudGVjaCl0cnl7bGV0IHQ9QigpW2Uua2V5Q29kZV07dCYmdCgpfWNhdGNoKGUpe2YoZSl9ZWxzZSgoKT0+e2xldCBlPSQoIi5wYW5lbEFjdGlvbnMgLnBhbmVsQWN0aW9uUm93LmJvdWdodFByaWNlIik7aWYoMD09ZS5sZW5ndGgpcmV0dXJuO2xldCB0PSQoIiN0ZWNoLWNvaW5zIik7MD09dC5sZW5ndGgmJigkKCc8ZGl2IGNsYXNzPSJwYW5lbEFjdGlvblJvdyBib3VnaHRQcmljZSI+PHNwYW4+VGVjaDwvc3Bhbj48c3BhbiBpZD0idGVjaC1jb2lucyI+PC9zcGFuPjwvZGl2PicpLmluc2VydEFmdGVyKGUpLHQ9JCgiI3RlY2gtY29pbnMiKSk7bGV0IG49cGFyc2VJbnQoJCgiLkRldGFpbFBhbmVsIC5ib3VnaHRQcmljZVZhbHVlIikudGV4dCgpLnJlcGxhY2UoIiwiLCIiKS5yZXBsYWNlKCIuIiwiIikpLGk9bisxZTMqKE1hdGguZmxvb3Iobi8xZTQpLTEpKzM1MDA7dC50ZXh0KGkpfSkoKTtlbHNlIE8oKX0pO2xldCBVPWU9PiQoIm5hdi51dC10YWItYmFyIikuYXBwZW5kKGA8YnV0dG9uIGNsYXNzPSJ1dC10YWItYmFyLWl0ZW0iIHN0eWxlPSJvcmRlcjozIj4ke2V9PC9idXR0b24+YCkseT0oZSx0LG4saSk9PlUoYDxhIHN0eWxlPSJ0ZXh0LWRlY29yYXRpb246bm9uZTtjb2xvcjoke2l8fCJpbmhlcml0In07Y3Vyc29yOnBvaW50ZXI7Y3Vyc29yOmhhbmQiIHRhcmdldD0iJHt0fSIgaHJlZj0iJHtlfSI+JHtufTwvYT5gKTt5KCJodHRwOi8vZWFsbGVncmV0dGEuZ2l0aHViLmlvL3BhbGV0b29scy8iLCJwYWxldG9vbHMiLCdQYWxldG9vbHMgdjIuMC44IDxzcGFuIGlkPSJwYWxldG9vbHMtc3RhdHVzIiBzdHlsZT0iY29sb3I6bGltZSI+T048L3NwYW4+JykseSgiaHR0cHM6Ly90d2l0dGVyLmNvbS9GRlZBIiwidHdpdHRlciIsIkBGRlZBIiwiIzAwOTlGRjtmb250LXdlaWdodDpib2xkIiksVSgnPGZvcm0gaWQ9InBhbGV0b29scy1kb25hdGUiIGFjdGlvbj0iaHR0cHM6Ly93d3cucGF5cGFsLmNvbS9jZ2ktYmluL3dlYnNjciIgbWV0aG9kPSJwb3N0IiB0YXJnZXQ9Il9ibGFuayI+XG4gICAgPGlucHV0IHR5cGU9ImhpZGRlbiIgbmFtZT0iY21kIiB2YWx1ZT0iX2RvbmF0aW9ucyIgLz5cbiAgICA8aW5wdXQgdHlwZT0iaGlkZGVuIiBuYW1lPSJidXNpbmVzcyIgdmFsdWU9IlpBSlg2QUQ2WFBMUk4iIC8+XG4gICAgPGlucHV0IHR5cGU9ImhpZGRlbiIgbmFtZT0iY3VycmVuY3lfY29kZSIgdmFsdWU9IlVTRCIgLz5cbiAgICA8YSBzdHlsZT0idGV4dC1kZWNvcmF0aW9uOm5vbmU7Y29sb3I6aW5oZXJpdCIgb25jbGljaz0iamF2YXNjcmlwdDokKFwnI3BhbGV0b29scy1kb25hdGVcJylbMF0uc3VibWl0KCkiIGhyZWY9ImphdmFzY3JpcHQ6dm9pZCgwKSI+UGFsZXRvb2xzIERvbmF0ZTwvYT48L2Zvcm0+PC9hPicpLHkoImh0dHBzOi8vd3d3Lmllc2EtZ2xvYmFsLmNvbSIsImllc2EiLCc8aW1nIHNyYz0iZGF0YTppbWFnZS9qcGVnO2Jhc2U2NCwvOWovNEFBUVNrWkpSZ0FCQVFFQVlBQmdBQUQvNFFCbVJYaHBaZ0FBVFUwQUtnQUFBQWdBQkFFYUFBVUFBQUFCQUFBQVBnRWJBQVVBQUFBQkFBQUFSZ0VvQUFNQUFBQUJBQUlBQUFFeEFBSUFBQUFRQUFBQVRnQUFBQUFBQUFCZ0FBQUFBUUFBQUdBQUFBQUJjR0ZwYm5RdWJtVjBJRFF1TWk0eEFQL2JBRU1BRUFzTURnd0tFQTRORGhJUkVCTVlLQm9ZRmhZWU1TTWxIU2c2TXowOE9UTTROMEJJWEU1QVJGZEZOemhRYlZGWFgySm5hR2MrVFhGNWNHUjRYR1ZuWS8vYkFFTUJFUklTR0JVWUx4b2FMMk5DT0VKalkyTmpZMk5qWTJOalkyTmpZMk5qWTJOalkyTmpZMk5qWTJOalkyTmpZMk5qWTJOalkyTmpZMk5qWTJOalkyTmpZLy9BQUJFSUFFSUFRQU1CSWdBQ0VRRURFUUgveEFBZkFBQUJCUUVCQVFFQkFRQUFBQUFBQUFBQUFRSURCQVVHQndnSkNndi94QUMxRUFBQ0FRTURBZ1FEQlFVRUJBQUFBWDBCQWdNQUJCRUZFaUV4UVFZVFVXRUhJbkVVTW9HUm9RZ2pRckhCRlZMUjhDUXpZbktDQ1FvV0Z4Z1pHaVVtSnlncEtqUTFOamM0T1RwRFJFVkdSMGhKU2xOVVZWWlhXRmxhWTJSbFptZG9hV3B6ZEhWMmQzaDVlb09FaFlhSGlJbUtrcE9VbFphWG1KbWFvcU9rcGFhbnFLbXFzck8wdGJhM3VMbTZ3c1BFeGNiSHlNbkswdFBVMWRiWDJObmE0ZUxqNU9YbTUranA2dkh5OC9UMTl2ZjQrZnIveEFBZkFRQURBUUVCQVFFQkFRRUJBQUFBQUFBQUFRSURCQVVHQndnSkNndi94QUMxRVFBQ0FRSUVCQU1FQndVRUJBQUJBbmNBQVFJREVRUUZJVEVHRWtGUkIyRnhFeUl5Z1FnVVFwR2hzY0VKSXpOUzhCVmljdEVLRmlRMDRTWHhGeGdaR2lZbktDa3FOVFkzT0RrNlEwUkZSa2RJU1VwVFZGVldWMWhaV21Oa1pXWm5hR2xxYzNSMWRuZDRlWHFDZzRTRmhvZUlpWXFTazVTVmxwZVltWnFpbzZTbHBxZW9xYXF5czdTMXRyZTR1YnJDdzhURnhzZkl5Y3JTMDlUVjF0ZlkyZHJpNCtUbDV1Zm82ZXJ5OC9UMTl2ZjQrZnIvMmdBTUF3RUFBaEVERVFBL0FPYnFlMnNycTcvNDk3ZVdYM1JTYTJ0QXRyVk5PYStscy90ZHdiZ1FReHNjTGtnSG11b2owM1U3bEFMdS93RHNzZjhBenhzMUM0SHB1UE5WY1J5RWVtSnBVUDJyV1lXM0U0aHR0MkRJZlVrZEFLc1duaSs0dFUyTFkyZ1RQQVJTdVBhdHc2UGJhanJWd2w2MHNrVm5GR2lLejlRUVNTVDYxeEtwYkpxSVNSMmUxV1hCZGVwWFBYOHFBTktIVUl0V3VCYjZsYng3cG0ycFBFb1ZrSjZaOVI5YXJYdWhhalpTdXIyc3JJcE9KRVVsU1BXdHZ4VkZwRnZhd1Bwd2hXNTNyZ3hOeUZBNmtEOE9hMWRLVysxZlNyYTlYVUpZTGdBcWNLQ2o0SjVLK3RJRHo3cFJYZDNObWJ1NUZqckZuQ1pwVVpvYnUzK1VzUU80cmhLWWpzdkRscGNmMlRaa3dQajdlSmVWL2cyL2UrbGIrcTMxMWF6MnlXOER5SXpabFlJVzJya0R0MzV6K0ZZRjlkM01PcjZKREZQSWtUd3hia1ZpQWVlNHJQc1k5YzFXZTUreVg4b0VUNElhWmgxSnhqOHFReldGM3FNaXRMTnA2dElTVkwvWlNXWmNjTGpQUTgvbDcxWGwrMUtybVBTWUhZTzRDL1lpUGxBNE9mNlZMWmFQNGppdllKSjc0dEVyZ3V2bnNjalBQRlZXajFuVmRjMUNLenYzaVNDUWptVXFBTWtBQUQ2VUFYVGJUSkt3ZXl0V1ZaVlRLMlBVRVpKL0RwVDdQVXRWdDdlTlRwL2xxSFhLUndFQUpqTFk5OG4rZFZ2N0E4U2Y5QmIvQU1qdi9oUWRBOFNZL3dDUXJuL3R1LzhBaFFCdTZpUi9iR2xuL3JyL0FPZ1Y1Z2VwcnI5SjFtN3R0UmJTOWFiTGNva3JqSlJpTURudURuclhNNmpZemFiZXlXczQrWkR3ZXpEc1JUUUhSYW4vQU1oM1FmOEFyakQvQU9oVm5hYllSWHR4ZCtacWEyUldUZ01jYnVUN2l0U0xVTkV2cHRPdUxtZTRpdWJkRVFLQjh1UWU1eDB6VDlSMHJRQkxQUGNTWFZ0aVlvNkx5QTNYMFBCSElwQU10dEd0b0xtS1krSVltRWJodHU0YzRQVDcxTGVhTFozTjljWEthN0JINXpsOW9JNHlmOTZvUDdMOE0vWmZ0UDI2NzhyZjVlN0g4V000Kzc2VVRhWDRaZ1NKNUw2N0N6SnZUanFNa2YzZmFnQ2hyRmltblJSdkJxeTNUTzJDcU4wSHIxTlg3RzQ4dnhWWXROTnNqRnVoWXMyQi9xcW5pMGJ3NHVxTFptNXVaSncyREUzUW5yaklIOWFTNnQ5QjFyVXQ4ZW9TbzdxQUVXSWdBS1BjY0RBb0F0ZUxiV3kxRzErMVc5ekFibUVkQklNdXZwOWF6SVdIaVRTUHM3a2YybFpybU5qL0FNdFU5UHIvQUo5YUxqUmRDdFVoYWJVNTFFeWIwL2Q4bGZYcFJCZDZOb2lUVDZmY1RYVjI2RkUzTHRDWjc5S0FPYXJ1dnNkcnFXa1c5eExleG9rMEFpbForTXV2M1Q5UWNqM0ZjTFd4b2VzeGFla2tGM2IvQUdtM1k3bFQrNjJNWkg0R21Cci9BUENQd2YyT2JYKzFiYmlmelMvYjd1TWRhTDNRSUxsTFNIKzFyWlh0NC9LSVBVbmNmZjN4V2haWCttYWhhRVdGbEU4MzhWczdCR3h6MDdIcWZ6cC8ydlMwSUZ6cGM4TXdQM0dnTFpQc1J3ZWxJQ3VOSGhYeENkU09wVytONWJ5Ky93QjArL3NmeXF2cG5oeTNqZDQxMUtDV1NYNVNFNjdQNGdPZXA2WjlNMW9oN0lscmk2MHhiVzJIUG0zREJXSjlsNU9heHIveExZTEZNbW0yUmptSUtwTjB3RHdUK1ZBR1I0a25TNDF1NE1UN29rSVJPTUFBREdCN1ZtVVVVeEJSUlJRQUFsU0NDUVIwSXJ0L0QxMWNTYVRNMGs4cnNxOEZuSklvb29ZMGNqZnp6VDNUR2FWNUNEZ0YySngrZFZxS0tCQlJSUlFCLzlrPSIgYWx0PSIiIC8+Jyl9KCk7";