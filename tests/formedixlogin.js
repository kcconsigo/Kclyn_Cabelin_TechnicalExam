
describe('Formedix Login Page', function() {
    it('User Navigates URL Formedix', function(){
      browser.get('https://ryze-staging.formedix.com/sign-in');

        var input = element(by.model('$ctrl.userId'));
        input.sendKeys('testteamtechtest');
        expect(input.getAttribute('value')).toBe('testteamtechtest');

        var input = element(by.model('$ctrl.password'));
        input.sendKeys('Ry3eT3st!');
        expect(input.getAttribute('value')).toBe('Ry3eT3st!');

        element(by.css('[data-ng-click="$ctrl.signIn()"]')).click();

        //browser.manage().window().maximize()

        browser.manage().timeouts().implicitlyWait(15000);
    });

    describe('Navigates to Repository and studies menu options', function() {
        var todoList;

    
        it('User hovers and selects menu option', function() {
            var mouseHover = element(by.id('menuMdb'));
            browser.actions().mouseMove(mouseHover).perform();
            browser.sleep(5000);

            element(by.id('menuMdbStudies')).click();
        });

        it('User performs following', function() {
            element(by.id('fdxMdbContainerListItem0StoredLabel')).click();
            element(by.id('ViewAssetGroupdataAcquisition')).click();
            element(by.id('FORMTypeView')).click();

            //Automation Tester needs to update this ID as Automated test scripts runs and ID changes as per Transaction
            element(by.id('uuid-4ac58640-4533-4654-927b-3b6475fbab9c')).click();
            //element.all(by.repeater('cat in p(key, item) in $ctrl.visibleProvider')).click();

            browser.manage().timeouts().implicitlyWait(15000);
            element(by.css('[data-ng-click="$ctrl.editSwitchBtn()"]')).click();

            var inputTypeClear = element(by.model('locale.text'));
            expect(inputTypeClear.getAttribute('value')).toBe('Doctor Prescription');
            inputTypeClear.clear();
            expect(inputTypeClear.getAttribute('value')).toEqual('');

            var inputType = element(by.model('locale.text'));
            inputType.sendKeys('Doctor Prescription');
            expect(inputType.getAttribute('value')).toBe('Doctor Prescription');
    
            element(by.css('[ng-click="$ctrl.save()"]')).click();

            var desc = element(by.id('formDescription'));
            expect(desc.getText()).toEqual('Doctor Prescription');

            //browser.sleep(8000);

          });

          it('User Signs out', function() {
            var buttonHover = element(by.id('menuUser'));
            browser.actions().mouseMove(buttonHover).perform();
            browser.sleep(5000);

            element(by.id('menuUserLogout')).click();

            //element(by.css('[ng-click="$ctrl.onClickHandler()"]')).click();
            //element(by.model('subitem.label')).click();

            browser.sleep(5000);
          });
        });
});