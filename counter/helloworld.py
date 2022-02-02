# -*- coding: utf-8 -*-
from __future__ import absolute_import, unicode_literals
from ast import While
import requests


import time
import octoprint.plugin


class HelloWorldPlugin(octoprint.plugin.StartupPlugin):
    def on_after_startup(self):
        x = 0
        url = "http://api.jir3d.com/impresoras/?id=0"
        while 1:

            if (x == 1):
                files = [('img', ('snapshot.jpg', open('snapshot.jpg', 'rb'), 'image/jpeg'))]
                x = 0
            else:
                files = [('img', ('aveja.jpg', open('aveja.jpg', 'rb'), 'image/jpeg'))]
                x = 1

            payload = {'METHOD': 'PUT', 'psu': x}
            response = requests.request("POST", url, data=payload, files=files)
            # self._logger.info(x)
            time.sleep(1)


__plugin_name__ = "Hello World"
__plugin_version__ = "1.0.0"
__plugin_description__ = "A quick \"Hello World\" example plugin for OctoPrint"
__plugin_pythoncompat__ = ">=2.7,<4"
__plugin_implementation__ = HelloWorldPlugin()
