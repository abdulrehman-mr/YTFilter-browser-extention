# YouTube Video Filter Extension

## Overview

The YouTube Video Filter Extension is a browser extension designed to filter out videos from the YouTube homepage based on a predefined list of forbidden words. This extension aims to provide users with a more tailored browsing experience by removing videos that contain certain keywords from their YouTube feed.

## Features

- Filters out videos from the YouTube homepage based on forbidden words.
- Automatically removes videos containing forbidden words upon page load and dynamically as new content is added.
- Optimized to reduce CPU usage by narrowing down the search scope and applying debouncing and throttling techniques.

## How It Works

### Installation

1. Download the extension files from the provided source.
2. Install the extension in your preferred web browser (Chrome, Edge, etc.) by loading the extension files as an unpacked extension.

### Usage

1. After installation, the extension automatically filters out videos containing forbidden words from your YouTube homepage.
2. Forbidden words are defined in the extension's code and can be customized according to your preferences.
3. Videos that match any of the forbidden words are removed from the homepage feed.

### Customization

- To customize the list of forbidden words, you can modify the `forbiddenWords` array in the extension's code.
- Additionally, you can adjust the debouncing and throttling settings in the code to optimize CPU usage further.

## Compatibility

The extension is compatible with popular web browsers such as Microsoft Edge, Google Chrome etc. 

## Limitations

- The extension currently filters videos only from the YouTube homepage. It does not affect search results or other YouTube pages.
- Customization options are limited to modifying the list of forbidden words and adjusting debouncing and throttling settings.


## Support and Feedback

For support or feedback, please [contact the developer](mailto:arehman@duck.com) or submit an issue on the extension's GitHub repository.

