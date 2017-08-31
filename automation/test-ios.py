import os
import time
import pdb
from appium import webdriver

driver = webdriver.Remote(
    command_executor='http://127.0.0.1:4723/wd/hub',
    desired_capabilities={
        'bundleId': 'com.furthermyfuture.Future',
        'platformName': 'iOS',
        'xcodeOrgId': '92BF9XF52T',
        'xcodeSigningId': 'iPhone Developer',
        'deviceName': 'iPhone',
        'udid': 'fba57f1cec075120433ebd785e3b6cc03a546741',
        'automationName': 'XCUITest'
    })

# wait for app to load
time.sleep(2)

# find the button with the text "Matching" and click on it
link = driver.find_element_by_xpath('//*[@text="Matching"]')
link.click()

# wait for the next screen to load
time.sleep(2)

# important; you will not be able to launch again if this does not happen
driver.quit()
