0.8.7 / 2013-3-7
================
* [Qualaroo](https://qualaroo.com/)
* Fixed bug with Chartbeat and page load times

0.8.6 / 2013-3-7
================
* Fixed bug in `trackLink` reported by [@quirkyjack](https://github.com/quirkyjack)
* Fixed bug in ClickTale where it didn't create the ClickTaleDiv

0.8.5 / 2013-3-7
================
* Storyberg by [@kevinicus](https://github.com/kevinicus)
* [BugHerd](http://bugherd.com)
* [ClickTale](http://clicktale.com)
* Cleaned up extraneous `require`'s in many providers

0.8.4 / 2013-3-5
================
* Added support for strings for the `created` trait
* Added `load-date` for getting the page's load time

0.8.3 / 2013-3-4
=================
* [Sentry](https://getsentry.com)
* Added initial pageview support to more providers
* Allowed HubSpot to recognize email `userId`
* Added support for DoubleClick [via Google Analytics](http://support.google.com/analytics/bin/answer.py?hl=en&answer=2444872)

0.8.2 / 2013-3-4
================
* Fixed bug in FoxMetrics provider
* Added queue for providers which don't support ready immediately.

0.8.1 / 2013-3-3
================
* Fixed bug in `trackForm` when submitted via jQuery

0.8.0 / 2013-3-1
================
* Added cookie-ing to keep identity and traits across page loads
* Added `identify` support for Clicky
* Added `identify` support for GoSquared
* Added `identify` support for Woopra
* Updated tracking for Usercycle

0.7.1 / 2013-2-26
=================
* Added Intercom companies by [@adrianrego](https://github.com/adrianrego)
* Added Intercom setting for use_counter
* Fixed Intercom traits passed without a created field

0.7.0 / 2013-2-25
=================
* Switched over to [Component](http://component.io/)

0.6.0 / 2013-2-7
================
* Added `ready` method for binding to when analytics are initialized
* Added [UserVoice](https://www.uservoice.com)
* Added [Perfect Audience](https://www.perfectaudience.com/)
* Added [LiveChat](http://livechatinc.com)
* Fixed Intercom to allow multiple `identify` calls

0.5.1 / 2013-2-4
================
* Merged in fix for Keen IO's branding
* Added fix to `utils.parseUrl()` field `pathname` in IE

0.5.0 / 2013-2-1
================
* Added an `alias` method for merging two user's by ID

0.4.10 / 2013-1-30
==================
* Fixed multiple elements on `trackLink` and `trackForm`
* Fixed CrazyEgg `apiKey` to `accountNumber`
* Fixed Keen to Keen.io


0.4.9 / 2013-1-29
=================
* Fixed `alias` and `extend` breaking on non-objects

0.4.8 / 2013-1-29
=================
* Fixed `trackForm` timeout by [@Plasma](https://github.com/Plasma)

0.4.7 / 2013-1-29
=================
* Added support for Mixpanel's [revenue](https://mixpanel.com/docs/people-analytics/javascript#track_charge) feature
* Added support for KISSmetrics' `"Billing Amount"` property for revenue
* Added support for `revenue` being passed to Google Analytics' `value` property

0.4.6 / 2013-1-28
=================
* Added automatic canonical URL support in Google Analytics

0.4.5 / 2013-1-25
=================
* Added Intercom widget setting
* Fixed Chartbeat from requiring `body` element to exist

0.4.4 / 2013-1-21
=================
* [Bitdeli](https://bitdeli.com/) by [@jtuulos](https://github.com/jtuulos)
* Added Mixpanel `$first_name` and `$last_name` aliases by [@dwradcliffe](https://github.com/dwradcliffe)
* Fixed Mixpanel `$last_seen` alias
* Added `parseUrl` util
* Moved GoSquared queue to snippet

0.4.3 / 2013-1-20
=================
* Added support for Errorception [user metadata](http://blog.errorception.com/2012/11/capture-custom-data-with-your-errors.html)

0.4.2 / 2013-1-18
=================
* Added option to use a properties function in `trackLink` and `trackForm` methods

0.4.1 / 2013-1-18
=================
* [Keen.io](http://keen.io/) by [@dkador](https://github.com/dkador)
* [Foxmetrics](http://foxmetrics.com/) by [@rawsoft](https://github.com/rawsoft)
* Updated Google Analytics to include noninteraction and value added by [@rantav](https://github.com/rantav)
* Moved to expect.js from chai for cross-broser support

0.4.0 / 2013-1-18
=================
* Renamed `trackClick` to `trackLink`
* Renamed `trackSubmit` to `trackForm`

0.3.8 / 2013-1-18
=================
* Fixed Clicky loading slowly

0.3.7 / 2013-1-17
=================
* [HitTail](http://hittail.com)
* [USERcycle](http://usercycle.com)
* Fixed Travis testing

0.3.6 / 2013-1-14
=================
* [SnapEngage](http://snapengage.com)

0.3.5 / 2013-1-14
=================
* Added `trackClick` and `trackForm` helpers

0.3.4 / 2013-1-13
=================
* Upgraded to Mixpanel 2.2 by [@loganfuller](https://github.com/loganfuller)

0.3.3 / 2013-1-11
=================
* [comScore Direct](http://direct.comscore.com)

0.3.2 / 2013-1-11
=================
* [Quantcast](http://quantcast.com)
* Fixed breaking issue on Clicky
* Updated Makefile for new providers


0.3.1 / 2013-1-11
=================
* Added `label` and `category` support to Google Analytics

0.3.0 / 2013-1-9
================
* [Gauges](http://get.gaug.es/) by [@bdougherty](https://github.com/bdougherty)
* [Vero](http://www.getvero.com/)
* Added optional `url` argument to `pageview` method

0.2.5 / 2013-1-8
================
* [Errorception](http://errorception.com/)
* [Clicky](http://clicky.com/)
* Fixed IE 7 bug reported by [@yefremov](https://github.com/yefremov)

0.2.4 / 2013-1-3
================
* Fixed GoSquared trailing comma by [@cmer](https://github.com/cmer)

0.2.3 / 2013-1-2
================
* Added domain field to GA by [@starrhorne](https://github.com/starrhorne)
* Removed phantom install to get travis working
* Added window._gaq fix in initialize

0.2.2 / 2012-12-19
==================
* Added link query tag support for `ajs_uid` and `ajs_event`
* Added docco, uglify, and phantom to `devDependencies` by [@peleteiro](https://github.com/peleteiro)

0.2.1 / 2012-12-18
==================
* Added the `pageview` method for tracking virtual pageviews
* Added Travis-CI
* Fixed window level objects in customerio and gosquared
* Added for Intercom's "secure" mode by [@buger](https://github.com/buger)
* Removed root references

0.2.0 / 2012-12-16
==================
* Separated providers into separate files for easier maintenance
* Changed special `createdAt` trait to `created` for cleanliness
* Moved `utils` directly onto the analytics object
* Added `extend` and `alias` utils
* Added `settings` defaults for all providers

0.1.2 / 2012-12-14
==================
* Fixed bug with HubSpot calls pre-script load
* Upgraded sinon-chai to use [callWithMatch version](https://github.com/obmarg/sinon-chai/blob/f7aa7eccd6c0c18a3e1fc524a246a50c1a29c916/lib/sinon-chai.js)
* [Klaviyo](http://www.klaviyo.com/) by [@bialecki](https://github.com/bialecki)
* [HubSpot](http://www.hubspot.com/) by [@jessbrandi](https://github.com/jessbrandi)
* [GoSquared](https://www.gosquared.com/) by [@simontabor](https://github.com/simontabor)

0.1.1 / 2012-10-25
==================
* Added "Enhanced Link Attribution" for Google Analytics by [@nscott](https://github.com/nscott)
* Added "Site Speed Sample Rate" for Google Analytics by [@nscott](https://github.com/nscott)

0.1.0 / 2012-10-11 
==================
* [Olark](http://www.olark.com/)
* Added terse `initialize` syntax
* Added tests for all providers
* Added README