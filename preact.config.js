import envVars from 'preact-cli-plugin-env-vars';
import CopyWebpackPlugin from 'copy-webpack-plugin'

function moveFileAssetsInRoot(config) {
    config.plugins.push( new CopyWebpackPlugin([{ context: `${__dirname}/src/assets`, from: `*.*` }]) );
}

export default {
   plugins: [
      envVars,
      moveFileAssetsInRoot,
   ],
}