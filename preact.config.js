import envVars from 'preact-cli-plugin-env-vars';
import CopyWebpackPlugin from 'copy-webpack-plugin'

export default {
   plugins: [
      envVars,
   ],
   webpack(config) {
      config.plugins.push( new CopyWebpackPlugin([{ context: `${__dirname}/src/assets`, from: `*.*` }]) );
   }
}