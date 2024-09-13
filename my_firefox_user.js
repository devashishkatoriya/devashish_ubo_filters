//
/* You may copy+paste this file and use it as it is.
 *
 * If you make changes to your about:config while the program is running, the
 * changes will be overwritten by the user.js when the application restarts.
 *
 * To make lasting changes to preferences, you will have to edit the user.js.
 */

/****************************************************************************
 * Betterfox                                                                *
 * "Ad meliora"                                                             *
 * version: 117                                                             *
 * url: https://github.com/yokoffing/Betterfox                              *
****************************************************************************/

/****************************************************************************
 * SECTION: FASTFOX                                                         *
****************************************************************************/
user_pref("nglayout.initialpaint.delay", 10);
user_pref("nglayout.initialpaint.delay_in_oopif", 10);
user_pref("content.notify.interval", 200000);           // default 120000

/** EXPERIMENTAL ***/
user_pref("layout.css.grid-template-masonry-value.enabled", true);
user_pref("dom.enable_web_task_scheduling", true);
user_pref("layout.css.has-selector.enabled", true);
user_pref("dom.security.sanitizer.enabled", true);

/** GFX ***/
//user_pref("gfx.canvas.accelerated", true); // enable if using a dedicated GPU on WINDOWS
user_pref("gfx.canvas.accelerated.cache-items", 4096);
user_pref("gfx.canvas.accelerated.cache-size", 512);
user_pref("gfx.content.skia-font-cache-size", 20);

/** BROWSER CACHE ***/
user_pref("browser.cache.disk.enable", false);

/** MEDIA CACHE ***/
user_pref("media.memory_cache_max_size", 65536);
user_pref("media.cache_readahead_limit", 7200);
user_pref("media.cache_resume_threshold", 3600);

/** IMAGE CACHE ***/
user_pref("image.mem.decode_bytes_at_a_time", 32768);

/** NETWORK ***/
user_pref("network.buffer.cache.size", 262144);
user_pref("network.buffer.cache.count", 128);
user_pref("network.http.max-connections", 1800);
user_pref("network.http.max-persistent-connections-per-server", 10);
user_pref("network.http.max-urgent-start-excessive-connections-per-host", 5);
user_pref("network.http.pacing.requests.enabled", false);
user_pref("network.dnsCacheEntries", 1000);
user_pref("network.dnsCacheExpiration", 86400);
user_pref("network.dns.max_high_priority_threads", 8);
user_pref("network.ssl_tokens_cache_capacity", 10240);

/** SPECULATIVE CONNECTIONS ***/
user_pref("network.http.speculative-parallel-limit", 0);
user_pref("network.dns.disablePrefetch", true);
user_pref("browser.urlbar.speculativeConnect.enabled", false);
user_pref("browser.places.speculativeConnect.enabled", false);
user_pref("network.prefetch-next", false);
user_pref("network.predictor.enabled", false);
user_pref("network.predictor.enable-prefetch", false);

user_pref("app.normandy.enabled", false);
user_pref("app.normandy.optoutstudies.enabled", false);
user_pref("messaging-system.rsexperimentloader.enabled", false);
user_pref("extensions.getAddons.cache.enabled", false);
user_pref("browser.startup.homepage_override.mstone", "ignore");
user_pref("browser.search.geoip.url", "");
user_pref("browser.newtabpage.activity-stream.feeds.asrouterfeed", false);
user_pref("browser.safebrowsing.downloads.remote.enabled", false);
user_pref("extensions.blocklist.enabled", false);
user_pref("network.dnsCacheEntries", 1000);
user_pref("network.dnsCacheExpiration", 300);
user_pref("network.trr.disable-ECS", true);
user_pref("network.trr.bootstrapAddress", "8.8.8.8");
user_pref("network.trr.custom_uri", "https://dns.google/dns-query");
user_pref("network.trr.default_provider_uri", "https://dns.google/dns-query");
user_pref("network.trr.uri", "https://dns.google/dns-query");
user_pref("network.trr.mode", 2);
//user_pref("esni.enabled", true);
//user_pref("network.dns.get-ttl", false);
user_pref("browser.tabs.closeWindowWithLastTab", false);            // Keep one tab always open, dont close the window on last tab close
user_pref("browser.urlbar.update2.engineAliasRefresh", true);      // Enables button to Add custom search engine


/****************************************************************************
 * SECTION: SMOOTHFOX                                                       *
****************************************************************************/
// visit https://github.com/yokoffing/Betterfox/blob/main/Smoothfox.js
// Enter your scrolling prefs below this line:
// recommended for 60hz+ displays
user_pref("apz.overscroll.enabled", true); // not DEFAULT on Linux
user_pref("general.smoothScroll", false); // DEFAULT = true
user_pref("mousewheel.default.delta_multiplier_y", 275); // 250-400; adjust this number to your liking


/****************************************************************************
 * START: MY OVERRIDES                                                      *
****************************************************************************/
// Enter your personal prefs below this line:

/****************************************************************************
 * END: BETTERFOX                                                           *
****************************************************************************/
