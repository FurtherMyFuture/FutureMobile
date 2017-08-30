import os
import time
import pdb
from appium import webdriver

driver = webdriver.Remote(
    command_executor='http://127.0.0.1:4723/wd/hub',
    desired_capabilities={
        'app': os.path.abspath('../android/app/build/outputs/apk/app-release.apk'),
        'platformName': 'Android',
        'deviceName': 'Nexus 6P API 25',
    })

# wait for app to load
time.sleep(2)

# find the link with the text "Click here" and click on it
link = driver.find_element_by_xpath('//*[@text="Matching"]')
link.click()

# wait for the next screen to load
time.sleep(2)

# important; you will not be able to launch again if this does not happen
driver.quit()
