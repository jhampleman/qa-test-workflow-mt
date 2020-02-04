import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject
import com.kms.katalon.core.checkpoint.Checkpoint as Checkpoint
import com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords as CucumberKW
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile
import com.kms.katalon.core.model.FailureHandling as FailureHandling
import com.kms.katalon.core.testcase.TestCase as TestCase
import com.kms.katalon.core.testdata.TestData as TestData
import com.kms.katalon.core.testobject.TestObject as TestObject
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI
import internal.GlobalVariable as GlobalVariable
import org.openqa.selenium.WebDriver as WebDriver
import org.openqa.selenium.chrome.ChromeDriver as ChromeDriver
import org.openqa.selenium.chrome.ChromeOptions as ChromeOptions
import org.openqa.selenium.logging.LogEntries as LogEntries
import org.openqa.selenium.logging.LogEntry as LogEntry
import org.openqa.selenium.Keys as Keys
import org.openqa.selenium.remote.DesiredCapabilities as DesiredCapabilities
import com.kms.katalon.core.webui.driver.DriverFactory as DriverFactory
import com.kms.katalon.core.webui.driver.WebUIDriverType as WebUIDriverType
import org.openqa.selenium.logging.LogType as LogType
import com.kms.katalon.core.logging.KeywordLogger as KeywordLogger
import com.kms.katalon.core.windows.keyword.WindowsBuiltinKeywords as Windows
import static com.kms.katalon.core.testobject.ObjectRepository.findWindowsObject

WebUI.openBrowser('')

WebUI.navigateToUrl('https://webdev.viasat.dev/jasmine/Jasmine.html')

WebUI.waitForElementVisible(findTestObject('jasmine-panel'), 10)

WebUI.verifyElementPresent(findTestObject('jasmine-error'), 0)

WebUIDriverType executedBrowser = DriverFactory.getExecutedBrowser()

switch (executedBrowser) {
    case WebUIDriverType.CHROME_DRIVER:
        WebDriver driver = DriverFactory.getWebDriver()

        LogEntries logs = driver.manage().logs().get('browser')

        for (LogEntry entry : logs) {
            def errtxt = entry.getMessage()

            println(errtxt)

            //Assert.assertFalse()
            assert !errtxt.contains('faketest')
        }
}

WebUI.closeBrowser()

