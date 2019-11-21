import { PermissionsAndroid, Alert } from 'react-native';
async function requestLocationPermission() 
{
        try {
            const granted = await PermissionsAndroid.request(
              PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
              {
                'title': 'ReactNativeCode Location Permission',
                'message': 'ReactNativeCode App needs access to your location '
              }
            )
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        
              // Alert.alert("Location Permission Granted.");
            }
            else {
              
              // Alert.alert("Location Permission Not Granted");
        
            }
          } catch (err) {
            console.warn(err)
          }
}
export default requestLocationPermission;
