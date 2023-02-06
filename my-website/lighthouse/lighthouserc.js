module.exports = {
    ci: {
      collect: {
    //     puppeteerScript: 'login-script.js',  // Ensure there's an authenticated user before running Lighthouse
    //   puppeteerLaunchOptions: {  
    //     defaultViewport: null  
    //   },
        url: [
            'https://genius.com'
        //   'https://keepinguptodate.com/code-snippets/'
        ],
        numberOfRuns: 1, // Set low to speed up the test runs. Default is 3.
        headful: true, // Show the browser which is helpful when checking the config
        settings: {
          disableStorageReset: true, // Don't clear localStorage / IndexedDB / etc before loading the page
          preset: 'desktop'
        }
      },
      upload: {
        target: 'temporary-public-storage'
      }
    }
  };